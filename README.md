# 🌐 SocialDev

A social network built with **Next.js**, **React**, and **MongoDB**, allowing users to create accounts, sign in, publish posts, and interact with the community.

## 🚀 Technologies Used

### Frontend

- **Next.js 12** - React framework for server-side rendering
- **React 17** - JavaScript library for building user interfaces
- **Styled Components 5** - CSS-in-JS styling solution
- **SWR 1** - Data fetching library with built-in caching
- **React Hook Form 7** - Form management library
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - JavaScript runtime
- **MongoDB 6** - NoSQL database
- **Mongoose** - Object Data Modeling (ODM) for MongoDB
- **Next Connect** - Middleware framework for Next.js API routes
- **Iron Session** - Encrypted cookie-based session management
- **bcryptjs** - Password hashing library

### Validation

- **Joi 17** - Data schema validation
- **Joi ObjectId** - MongoDB ObjectId validation
- **Next Joi** - Joi integration for Next.js

### Other Libraries

- **Moment.js** - Date manipulation library

## 📋 Features

### Authentication

- ✅ User registration
- ✅ Login using username or email
- ✅ Secure logout
- ✅ Persistent sessions with Iron Session

### Posts

- ✅ Create posts (up to 256 characters)
- ✅ View the post feed
- ✅ Edit posts (author only)
- ✅ Delete posts (author only)
- ✅ Like system for posts

### Users

- ✅ User profiles with first name, last name, username, and email
- ✅ Unique email validation
- ✅ Unique username validation
- ✅ Secure password hashing

## 🏗️ Project Structure

```text
socialDev/
├── lib/
│   └── middleware/
│       ├── ironSession.js      # Session configuration
│       ├── mongoose.js         # MongoDB connection
│       └── nextConnect.js      # Middleware configuration
├── modules/
│   ├── likes/                  # Likes module
│   ├── post/
│   │   ├── post.model.js       # Post Mongoose model
│   │   ├── post.schema.js      # Joi validation schema
│   │   └── post.service.js     # Post business logic
│   └── user/
│       ├── user.model.js       # User Mongoose model
│       ├── user.schema.js      # Joi validation schema
│       └── user.service.js     # User business logic
├── pages/
│   ├── api/
│   │   ├── likes/
│   │   ├── post/
│   │   │   ├── index.js        # Posts CRUD API
│   │   │   └── likes.js        # Post likes API
│   │   └── user/
│   │       ├── login.js        # Login API
│   │       ├── logout.js       # Logout API
│   │       └── signup.js       # Registration API
│   ├── _app.jsx                # Root application component
│   ├── _document.jsx           # Custom HTML document
│   ├── index.jsx               # Home page (feed)
│   └── login.jsx               # Login page
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── input/
│   │   ├── layout/
│   │   ├── navigation/
│   │   └── typography/
│   └── theme.js                # Theme configuration
├── utils/
│   └── bcrypt.js               # bcrypt utilities
├── public/
├── .babelrc
├── .gitignore
├── package.json
└── style.css
```

## 🔧 Environment Setup

### Prerequisites

- Node.js
- MongoDB or MongoDB Atlas
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd socialDev
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/socialdev
# Or use your MongoDB Atlas connection string
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application:

```text
http://localhost:3000
```

## 📊 Data Models

### User

```javascript
{
  firstName: String (required, max 50),
  lastName: String (required, max 50),
  user: String (required, max 30, unique),
  email: String (required, max 100, unique),
  password: String (required, hashed)
}
```

### Post

```javascript
{
  text: String (required, max 256),
  createdDate: Date (required),
  createdBy: ObjectId (ref: User)
}
```

## 🔐 Security

- Passwords are securely hashed using **bcryptjs** before storage.
- Sessions are managed with **Iron Session** using encrypted cookies.
- User input is validated with **Joi** schemas.
- Protected routes use server-side authentication through Iron Session.

## 🎨 Styling

The project uses **Styled Components**, providing:

- CSS-in-JS component styling
- Configurable themes through `theme.js`
- Dynamic styles based on component props

## 📝 API Routes

### Authentication

- `POST /api/user/signup` - Register a new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### Posts

- `GET /api/post` - Retrieve all posts
- `POST /api/post` - Create a new post
- `PUT /api/post` - Update an existing post
- `DELETE /api/post` - Delete a post

### Likes

- `POST /api/post/likes` - Add or remove a like from a post

## 🚀 Deployment

You can deploy the application using:

### Vercel (Recommended for Next.js)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- Heroku
- Railway
- DigitalOcean App Platform

Make sure to configure the appropriate environment variables for your deployment platform.

## 📄 License

ISC

## 👨‍💻 Development

This project was created as a starter kit for building social networking applications with **Next.js**, following modern web development best practices.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.
