
# Vidyarthi - Learning Platform

Vidyarthi is a comprehensive e-learning platform that provides high-quality courses and learning resources to students worldwide. Built with modern technologies, it offers an intuitive user experience for both students and instructors.

## Features

- **User Authentication**: Secure login and registration system
- **Course Management**: Create, edit, and manage courses
- **Payment Integration**: Razorpay payment gateway integration
- **Email Notifications**: Automated email system for various events
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Live course progress tracking
- **Instructor Dashboard**: Comprehensive tools for course creators
- **Student Dashboard**: Personalized learning experience

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Nodemailer
- Cloudinary
- Razorpay

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/Vidyarthi.git
cd Vidyarthi
```

2. Install dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Environment Setup
```bash
# Create .env file in the root directory
cp .env.example .env

# Create .env file in the server directory
cd server
cp .env.example .env
```

4. Configure environment variables
```env
# Frontend (.env)
REACT_APP_BACKEND_URL=http://localhost:5000

# Backend (server/.env)
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAIL_HOST=your_smtp_host
MAIL_USER=your_email
MAIL_PASS=your_email_password
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

5. Start the development servers
```bash
# Start both frontend and backend
npm run dev

# Or start them separately
npm start          # Frontend
npm run server     # Backend
```

## Project Structure

```
Vidyarthi/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── slices/
│   └── utils/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

**Kushagra Richhariya**

## Support

For support, email info@Vidyarthi.com or create an issue in the repository.



