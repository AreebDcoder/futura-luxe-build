# Jeedaar Builders Backend API

A robust Node.js/Express backend for handling contact form submissions with comprehensive validation and error handling.

## 🚀 Features

- **Contact Form API** with comprehensive validation
- **Email validation** using regex patterns
- **Name validation** with character limits (2-50 characters)
- **Phone number validation** with international format support
- **Message validation** with length limits (10-1000 characters)
- **Input sanitization** to prevent XSS attacks
- **Rate limiting** to prevent spam
- **MongoDB integration** (optional - works without database too)
- **Comprehensive error handling**
- **CORS support** for frontend integration
- **Security headers** with Helmet.js

## 📋 Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- MongoDB (optional - will work without it for testing)

## ⚡ Quick Start

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Environment setup:**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your configuration
   # You can leave MONGODB_URI empty for now - it will work without database
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Test the API:**
   ```bash
   # Health check
   curl http://localhost:5000/health
   
   # Test contact form
   curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "firstName": "John",
       "lastName": "Doe",
       "email": "john@example.com",
       "phone": "1234567890",
       "message": "This is a test message"
     }'
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration (Optional)
MONGODB_URI=your_mongodb_connection_string_here

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Without MongoDB

The API will work perfectly without MongoDB! When no database is configured:
- Form submissions are logged to the console
- All validation still works
- Perfect for development and testing

### With MongoDB

When you provide a MongoDB URI, the API will:
- Store all contact submissions in the database
- Provide admin endpoints to view submissions
- Track submission metadata (IP, user agent, timestamps)

## 📚 API Endpoints

### POST /api/contact
Submit a contact form

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Project details here"
}
```

**Validation Rules:**
- **firstName/lastName**: 2-50 characters, letters/spaces/hyphens/apostrophes only
- **email**: Valid email format, max 254 characters
- **phone**: 10-15 digits, international format supported
- **message**: 10-1000 characters

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We will get back to you soon.",
  "data": {
    "id": "contact_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "submittedAt": "2023-12-07T10:30:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation Failed",
  "message": "Please check your input data and try again",
  "details": [
    {
      "field": "firstName",
      "message": "First name must be between 2 and 50 characters"
    }
  ]
}
```

### GET /health
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "message": "Jeedaar Builders API is running",
  "timestamp": "2023-12-07T10:30:00.000Z",
  "environment": "development"
}
```

## 🛡️ Security Features

- **Input Sanitization**: Removes HTML tags and excessive whitespace
- **Rate Limiting**: Prevents spam and abuse
- **CORS Protection**: Configurable origin restrictions
- **Helmet.js**: Security headers for protection
- **Validation**: Comprehensive server-side validation
- **Error Handling**: Secure error responses without exposing internals

## 🧪 Testing

```bash
# Start the server
npm run dev

# Test with curl
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "This is a test message for the contact form"
  }'
```

## 📝 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

## 🤝 Frontend Integration

The backend is designed to work seamlessly with the React frontend. Make sure to:

1. Start the backend on port 5000
2. Update the frontend API URL if needed
3. Both servers can run simultaneously for development

## 🔮 Next Steps

Once you provide the MongoDB URI:

1. Add the URI to your `.env` file
2. Restart the server
3. Contact submissions will be automatically saved to the database
4. You can use the admin endpoints to view submissions

The API is production-ready and includes all necessary security measures and error handling!
