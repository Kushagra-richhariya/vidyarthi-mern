# Study-Notion Setup Instructions

## Environment Variables (.env file)

Create a `.env` file in the `kkk/server/` directory with the following variables:

```env
# Database Configuration
MONGODB_URL=mongodb://localhost:27017/vidyarthi
# or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/vidyarthi
# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure

# Server Configuration
PORT=4000

# Cloudinary Configuration (for image/video uploads)
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Email Configuration (for sending emails)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
MAIL_FROM=your_email@gmail.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

## How to Get the Required Keys

### 1. MongoDB
- **Local MongoDB**: Install MongoDB locally and use `mongodb://localhost:27017/vdyarthi`
- **MongoDB Atlas**: 
  - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
  - Create a free cluster
  - Get your connection string

### 2. Cloudinary (for media uploads)
- Go to [Cloudinary](https://cloudinary.com/)
- Create a free account
- Get your Cloud Name, API Key, and API Secret from the dashboard

### 3. Gmail (for email functionality)
- Use your Gmail account
- Enable 2-factor authentication
- Generate an App Password for the application

## Commands to Run the Project

### 1. Install Dependencies

```bash
# Install frontend dependencies
cd kkk
npm install

# Install backend dependencies
cd server
npm install
```

### 2. Start the Development Servers

#### Option 1: Run both frontend and backend together
```bash
# From the kkk directory
npm run dev
```

#### Option 2: Run them separately

**Terminal 1 - Backend:**
```bash
cd kkk/server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd kkk
npm start
```

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000

## Important Notes

1. **Payment functionality is disabled** - All payment-related features have been commented out as requested.

2. **Database**: Make sure MongoDB is running locally or you have a valid MongoDB Atlas connection string.

3. **Email**: The email functionality requires a Gmail account with App Password enabled.

4. **Cloudinary**: Required for uploading course images and videos.

## Troubleshooting

1. **Port already in use**: Change the PORT in .env file
2. **MongoDB connection failed**: Check your MongoDB URL and ensure the database is running
3. **CORS errors**: Make sure the FRONTEND_URL in .env matches your frontend URL
4. **Email not sending**: Verify your Gmail credentials and App Password

## Features Available

- ✅ User authentication (signup/login)
- ✅ Course creation and management
- ✅ Course browsing and viewing
- ✅ User profiles
- ✅ Course progress tracking
- ✅ Rating and reviews
- ❌ Payment processing (disabled)
- ❌ Course enrollment (disabled due to payment)

## Default Admin Account

You can create an admin account by:
1. Sign up normally
2. Manually change the `accountType` to "Admin" in the database
3. Or modify the signup controller to allow admin registration 