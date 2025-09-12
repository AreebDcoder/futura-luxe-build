import { body, validationResult } from 'express-validator';

// Contact form validation rules
export const validateContactForm = [
  // First Name validation
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('First name can only contain letters, spaces, hyphens, and apostrophes'),

  // Last Name validation
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Last name can only contain letters, spaces, hyphens, and apostrophes'),

  // Email validation
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage('Email address is too long'),

  // Phone validation
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number')
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number must be between 10 and 15 digits'),

  // Message validation
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
];

// Middleware to handle validation results
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map(error => ({
      field: error.path || error.param,
      message: error.msg,
      value: error.value
    }));

    return res.status(400).json({
      error: 'Validation Failed',
      message: 'Please check your input data and try again',
      details: formattedErrors,
      status: 400
    });
  }
  
  next();
};

// Additional sanitization middleware
export const sanitizeInput = (req, res, next) => {
  // Remove any HTML tags and excessive whitespace
  if (req.body.firstName) {
    req.body.firstName = req.body.firstName.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
  if (req.body.lastName) {
    req.body.lastName = req.body.lastName.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
  if (req.body.message) {
    req.body.message = req.body.message.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
  if (req.body.phone) {
    req.body.phone = req.body.phone.replace(/[^\d\+]/g, '');
  }
  
  next();
};
