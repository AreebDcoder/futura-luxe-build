import express from 'express';
import Contact from '../models/Contact.js';
import { validateContactForm, handleValidationErrors, sanitizeInput } from '../middleware/validation.js';

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', 
  sanitizeInput,
  validateContactForm,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;
      
      // Get client IP and User Agent for tracking
      const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
      const userAgent = req.get('User-Agent');

      // Check if MongoDB is connected
      if (!process.env.MONGODB_URI) {
        // If no MongoDB, just log the submission and return success
        console.log('📝 Contact Form Submission (No Database):');
        console.log('==========================================');
        console.log(`Name: ${firstName} ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: ${message}`);
        console.log(`IP: ${ipAddress}`);
        console.log(`User Agent: ${userAgent}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log('==========================================\n');

        return res.status(200).json({
          success: true,
          message: 'Thank you for your inquiry! We will get back to you soon.',
          data: {
            id: `temp_${Date.now()}`,
            fullName: `${firstName} ${lastName}`,
            email: email,
            submittedAt: new Date().toISOString()
          }
        });
      }

      // Create new contact entry
      const newContact = new Contact({
        firstName,
        lastName,
        email,
        phone,
        message,
        ipAddress,
        userAgent
      });

      // Save to database
      const savedContact = await newContact.save();

      // Log successful submission
      console.log(`✅ New contact submission: ${savedContact.fullName} (${savedContact.email})`);

      // Return success response
      res.status(201).json({
        success: true,
        message: 'Thank you for your inquiry! We will get back to you soon.',
        data: {
          id: savedContact._id,
          fullName: savedContact.fullName,
          email: savedContact.email,
          submittedAt: savedContact.createdAt
        }
      });

    } catch (error) {
      console.error('❌ Error saving contact:', error);
      
      // Handle specific database errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          success: false,
          error: 'Validation Error',
          message: 'Please check your input data',
          details: Object.values(error.errors).map(e => ({
            field: e.path,
            message: e.message
          }))
        });
      }

      // Generic server error
      res.status(500).json({
        success: false,
        error: 'Server Error',
        message: 'Something went wrong. Please try again later.'
      });
    }
  }
);

// GET /api/contact - Get all contacts (for admin use)
router.get('/', async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      return res.status(503).json({
        success: false,
        error: 'Service Unavailable',
        message: 'Database not configured'
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v -ipAddress -userAgent');

    const total = await Contact.countDocuments();

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: 'Failed to fetch contacts'
    });
  }
});

// GET /api/contact/:id - Get specific contact
router.get('/:id', async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      return res.status(503).json({
        success: false,
        error: 'Service Unavailable',
        message: 'Database not configured'
      });
    }

    const contact = await Contact.findById(req.params.id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Not Found',
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });

  } catch (error) {
    console.error('❌ Error fetching contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID',
        message: 'Please provide a valid contact ID'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: 'Failed to fetch contact'
    });
  }
});

// PUT /api/contact/:id/status - Update contact status
router.put('/:id/status', async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      return res.status(503).json({
        success: false,
        error: 'Service Unavailable',
        message: 'Database not configured'
      });
    }

    const { status } = req.body;
    const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'closed'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Status',
        message: `Status must be one of: ${validStatuses.join(', ')}`
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Not Found',
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('❌ Error updating contact status:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID',
        message: 'Please provide a valid contact ID'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server Error',
      message: 'Failed to update contact status'
    });
  }
});

export default router;
