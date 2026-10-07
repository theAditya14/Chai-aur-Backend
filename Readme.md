# ☕ My Chai aur Backend Learning Journey

I am currently learning **Backend Development with the MERN Stack**, and honestly, I am finding the journey really exciting and enjoyable.

I started my backend journey by following the **Sheryians Coding School backend series**. It was an amazing learning experience for me because it helped me understand the **fundamentals of backend development**. Through that series, I learned the basic concepts of how a backend works and built a strong foundation.

After understanding the fundamentals, I wanted to explore how backend applications are built using a more **structured and professional approach**. That's when I started following the **Chai aur Code Backend Series**.

I really like the way the series focuses on writing **clean, scalable, and professional backend code** instead of just creating simple projects.

So far, I have been learning and exploring concepts such as:

* Backend fundamentals and how servers work
* Node.js and Express.js
* REST APIs and HTTP methods
* Request and Response handling
* Async/Await and Promises
* Async Handler for error handling
* Custom API Error classes
* API Response structure
* Professional backend folder structure
* Controllers and Middleware
* Database connection using MongoDB and Mongoose
* Mongoose Schemas and Models
* Mongoose Middleware and Hooks
* Pre Hooks and Error Handling Hooks
* Creating Custom Methods in Mongoose
* Password hashing using Bcrypt
* Authentication using JWT
* Cookies and User Authentication
* Environment Variables
* Database Design and Relationships
* Writing clean and maintainable backend code

Currently, I am continuously learning more about **Mongoose, authentication, middleware, JWT, Bcrypt, custom methods, hooks, and professional backend architecture**.

My goal is not just to learn how to create APIs, but to understand **how real-world backend applications are structured and developed**.

I am trying to build my backend knowledge step by step:

**Fundamentals → APIs → Databases → Authentication → Professional Architecture → Real-World Projects**

I know I still have a lot to learn, but I am enjoying the process and trying to understand concepts deeply instead of just copying code.

🚀 **This is just the beginning of my Backend Development Journey.**

# 🎬 YouTube Backend API

> A RESTful backend API for a YouTube-like video platform built with **Node.js, Express.js, MongoDB, JWT, Cloudinary, and Mongoose**.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose\&logoColor=white)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens)](https://jwt.io/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media%20Storage-blue?logo=cloudinary\&logoColor=white)](https://cloudinary.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

---

## 📌 Overview

This project is a backend implementation of a **YouTube-like video platform**.

The API provides functionality for:

* 👤 User authentication
* 🔐 JWT-based authorization
* 🎥 Video upload and management
* ☁️ Cloudinary media storage
* 👥 Channel subscriptions
* ❤️ Video and comment likes
* 💬 Comments
* 🕘 Watch history
* 👤 User profiles
* 🔄 Publish / unpublish videos
* 🔑 Password management

The project is designed as a **REST API**, so a frontend, mobile application, Postman, or another service can communicate with it through HTTP requests.

---

# ✨ Features

### 👤 Authentication & Users

* User login and logout
* Protected routes
* Password change
* Profile management
* Avatar upload
* User profile lookup
* Watch history

### 🎥 Video Management

* Upload videos
* Upload thumbnails
* Store media using Cloudinary
* Retrieve individual videos
* Retrieve videos uploaded by a user
* Publish / unpublish videos

### 👥 Subscriptions

* Subscribe / unsubscribe to channels
* Get channel subscribers
* Get channels subscribed to by a user

### ❤️ Likes

* Like / unlike videos
* Get video likes
* Like / unlike comments

### 💬 Comments

* Add comments to videos
* Delete comments

---

# 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │      CLIENT         │
                         │                     │
                         │ Web / Mobile /      │
                         │ Postman / Frontend  │
                         └──────────┬──────────┘
                                    │
                                    │ HTTP Requests
                                    ▼
                         ┌─────────────────────┐
                         │     EXPRESS.JS      │
                         │      SERVER         │
                         └──────────┬──────────┘
                                    │
                  ┌─────────────────┼─────────────────┐
                  │                 │                 │
                  ▼                 ▼                 ▼
          ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
          │   Routes     │  │ Middleware   │  │ Controllers  │
          │              │  │              │  │              │
          │ Users        │  │ JWT Auth     │  │ Business     │
          │ Videos       │  │ Error Handle │  │ Logic        │
          │ Likes        │  │ Validation   │  │              │
          │ Comments     │  │              │  │              │
          │ Subscription │  │              │  │              │
          └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
                 │                 │                 │
                 └─────────────────┼─────────────────┘
                                   │
                                   ▼
                         ┌─────────────────────┐
                         │      MONGOOSE       │
                         │       ODM           │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      MONGODB        │
                         │      Database       │
                         └─────────────────────┘

                         ┌─────────────────────┐
                         │     CLOUDINARY      │
                         │                     │
                         │ Videos / Images     │
                         └─────────────────────┘
```

---

# 🛠️ Tech Stack

| Technology        | Purpose               |
| ----------------- | --------------------- |
| **Node.js**       | JavaScript runtime    |
| **Express.js**    | Backend web framework |
| **MongoDB**       | Database              |
| **Mongoose**      | MongoDB ODM           |
| **JWT**           | Authentication        |
| **bcrypt**        | Password hashing      |
| **Cloudinary**    | Video & image storage |
| **Multer**        | File upload handling  |
| **CORS**          | Cross-origin requests |
| **Cookie Parser** | Cookie handling       |
| **Morgan**        | HTTP request logging  |

---

# 📂 Project Structure

```text
BACKEND/
│
├── src/
│   │
│   ├── controllers/
│   │
│   ├── db/
│   │   └── index.js
│   │
│   ├── middlewares/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── utils/
│   │
│   ├── app.js
│   └── index.js
│
├── Public/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

> The exact folder structure may vary depending on the current implementation.

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Navigate to the project

```bash
cd BACKEND
```

## 3. Install dependencies

```bash
npm install
```

## 4. Create `.env`

Create a `.env` file in the root directory:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string
DB_NAME=your_database_name

CORS_ORIGIN=http://localhost:3000

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> ⚠️ Never commit your `.env` file or expose your API keys publicly.

---

# 🔐 Environment Variables

| Variable                | Description                    |
| ----------------------- | ------------------------------ |
| `PORT`                  | Server port                    |
| `MONGODB_URL`           | MongoDB connection string      |
| `DB_NAME`               | MongoDB database name          |
| `CORS_ORIGIN`           | Allowed frontend origin        |
| `ACCESS_TOKEN_SECRET`   | Secret used for access tokens  |
| `ACCESS_TOKEN_EXPIRY`   | Access token expiry            |
| `REFRESH_TOKEN_SECRET`  | Secret used for refresh tokens |
| `REFRESH_TOKEN_EXPIRY`  | Refresh token expiry           |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name          |
| `CLOUDINARY_API_KEY`    | Cloudinary API key             |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret          |

---

# 🚀 Running the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The API will be available at:

```text
http://localhost:8000
```

---

# 🌐 API Base URL

### Local

```text
http://localhost:8000/api/v1
```

### Production

```text
YOUR_DEPLOYED_API_URL/api/v1
```

> Replace `YOUR_DEPLOYED_API_URL` with your actual deployed backend URL.

---

# 📡 API Documentation

## 🔐 Authentication & User APIs

|  Method | Endpoint                   | Description       |
| :-----: | -------------------------- | ----------------- |
|  `POST` | `/users/login`             | Login user        |
|  `POST` | `/users/logout`            | Logout user       |
| `PATCH` | `/users/changePassword`    | Change password   |
| `PATCH` | `/users/updateAvatar`      | Update avatar     |
|  `GET`  | `/users/profile/:username` | Get user profile  |
|  `GET`  | `/users/history`           | Get watch history |

---

### 🔑 Login

```http
POST /api/v1/users/login
```

Example request:

```json
{
  "email": "user@example.com",
  "password": "yourPassword"
}
```

---

### 🚪 Logout

```http
POST /api/v1/users/logout
```

Logs out the currently authenticated user.

---

### 🔐 Change Password

```http
PATCH /api/v1/users/changePassword
```

Example:

```json
{
  "oldPassword": "oldPassword",
  "newPassword": "newPassword"
}
```

---

### 🖼️ Update Avatar

```http
PATCH /api/v1/users/updateAvatar
```

Example:

```text
Content-Type: multipart/form-data

avatar: <image-file>
```

---

### 👤 Get User Profile

```http
GET /api/v1/users/profile/:username
```

Example:

```http
GET /api/v1/users/profile/aditya
```

---

### 🕘 Get Watch History

```http
GET /api/v1/users/history
```

Returns the authenticated user's watch history.

---

# 🎥 Video APIs

|  Method | Endpoint                             | Description           |
| :-----: | ------------------------------------ | --------------------- |
|  `POST` | `/videoRouter/uploade-video`         | Upload video          |
|  `GET`  | `/videoRouter/getVideo/:videoId`     | Get a video           |
|  `GET`  | `/videoRouter/getAllVideo/:userId`   | Get user's videos     |
| `PATCH` | `/videoRouter/video-toggle/:videoId` | Toggle publish status |

---

### 📤 Upload Video

```http
POST /api/v1/videoRouter/uploade-video
```

Example form data:

```text
videoFile    → <video-file>
thumbnail    → <image-file>
title        → My First Video
description  → This is my first video
```

The uploaded media is processed and stored using Cloudinary.

---

### 🎬 Get Video

```http
GET /api/v1/videoRouter/getVideo/:videoId
```

Example:

```http
GET /api/v1/videoRouter/getVideo/VIDEO_ID
```

---

### 📺 Get User Videos

```http
GET /api/v1/videoRouter/getAllVideo/:userId
```

Example:

```http
GET /api/v1/videoRouter/getAllVideo/USER_ID
```

Returns videos uploaded by the specified user.

---

### 🌐 Toggle Publish Status

```http
PATCH /api/v1/videoRouter/video-toggle/:videoId
```

Toggles the video's publish state:

```text
Published
    ↓
Unpublished
    ↓
Published
```

---

# 👥 Subscription APIs

| Method | Endpoint                                            | Description             |
| :----: | --------------------------------------------------- | ----------------------- |
| `POST` | `/subscription/toggle/:channelId`                   | Subscribe / unsubscribe |
|  `GET` | `/subscription/channel/:channelId/subscribers`      | Get channel subscribers |
|  `GET` | `/subscription/channel/:subscriberId/subscribed-to` | Get subscribed channels |

---

### 🔄 Subscribe / Unsubscribe

```http
POST /api/v1/subscription/toggle/:channelId
```

Example:

```http
POST /api/v1/subscription/toggle/CHANNEL_ID
```

Calling the endpoint toggles the subscription state.

---

### 👥 Get Channel Subscribers

```http
GET /api/v1/subscription/channel/:channelId/subscribers
```

Example:

```http
GET /api/v1/subscription/channel/CHANNEL_ID/subscribers
```

Returns users subscribed to the channel.

---

### 📺 Get Subscribed Channels

```http
GET /api/v1/subscription/channel/:subscriberId/subscribed-to
```

Example:

```http
GET /api/v1/subscription/channel/USER_ID/subscribed-to
```

Returns channels followed by the specified user.

---

# ❤️ Like APIs

| Method | Endpoint                                 | Description           |
| :----: | ---------------------------------------- | --------------------- |
| `POST` | `/like/video-like/:videoId`              | Like / unlike video   |
|  `GET` | `/like/video-AllLike/:videoId`           | Get video likes       |
| `POST` | `/like/video-like-on-comment/:commentId` | Like / unlike comment |

---

### ❤️ Like / Unlike Video

```http
POST /api/v1/like/video-like/:videoId
```

Example:

```http
POST /api/v1/like/video-like/VIDEO_ID
```

The endpoint toggles the user's like state.

```text
Like
 ↓
Unlike
 ↓
Like
```

---

### 👍 Get Video Likes

```http
GET /api/v1/like/video-AllLike/:videoId
```

Example:

```http
GET /api/v1/like/video-AllLike/VIDEO_ID
```

Returns information about users who liked the video.

---

### 💬 Like / Unlike Comment

```http
POST /api/v1/like/video-like-on-comment/:commentId
```

Example:

```http
POST /api/v1/like/video-like-on-comment/COMMENT_ID
```

---

# 💬 Comment APIs

|  Method  | Endpoint                 | Description    |
| :------: | ------------------------ | -------------- |
|  `POST`  | `/comments/:videoId`     | Add comment    |
| `DELETE` | `/comments/c/:commentId` | Delete comment |

---

### 💬 Add Comment

```http
POST /api/v1/comments/:videoId
```

Example:

```http
POST /api/v1/comments/VIDEO_ID
```

Request body:

```json
{
  "content": "Great video! 🔥"
}
```

---

### 🗑️ Delete Comment

```http
DELETE /api/v1/comments/c/:commentId
```

Example:

```http
DELETE /api/v1/comments/c/COMMENT_ID
```

Deletes the specified comment.

---

# 🔒 Authentication

Some endpoints require an authenticated user.

Typical flow:

```text
┌───────────────┐
│     Login     │
└───────┬───────┘
        │
        ▼
┌───────────────────┐
│ Authentication    │
│ Token / Cookies   │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Protected APIs    │
│                   │
│ • Upload Video    │
│ • Like            │
│ • Subscribe       │
│ • Comment         │
│ • Change Password │
└───────────────────┘
```

---

# 🧪 Testing APIs

The APIs can be tested using tools such as:

* Postman
* Thunder Client
* Insomnia
* Frontend applications
* Mobile applications

### Example

```text
Client
   │
   │ POST /api/v1/users/login
   ▼
Express Server
   │
   ▼
Authentication Middleware
   │
   ▼
Controller
   │
   ▼
MongoDB
   │
   ▼
JSON Response
```

---

# ☁️ Deployment

The backend can be deployed to platforms such as:

* Render
* Railway
* AWS
* DigitalOcean
* Other Node.js compatible hosting platforms

### Production checklist

Before deploying:

```text
✓ Set production environment variables
✓ Configure MongoDB
✓ Configure Cloudinary
✓ Configure CORS
✓ Never expose .env
✓ Use production secrets
✓ Test all protected routes
✓ Test file uploads
✓ Test database connection
```

### Production URL

```text
API:
YOUR_PRODUCTION_API_URL
```

```text
API Base:
YOUR_PRODUCTION_API_URL/api/v1
```

### API Documentation

```text
Postman Collection:
YOUR_POSTMAN_COLLECTION_URL
```

---

# 📊 API Overview

```text
                    YouTube Backend
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
      Users              Videos          Subscriptions
        │                  │                  │
        │                  │                  │
        ▼                  ▼                  ▼
 Authentication      Upload / Get       Subscribe
 Profile             Publish            Subscribers
 History             Manage             Channels
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    Likes    │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Comments   │
                    └─────────────┘
```

---

# 🔮 Future Improvements

Planned improvements for future versions:

* [ ] Video streaming support
* [ ] Video pagination
* [ ] Search functionality
* [ ] Trending videos
* [ ] Recommended videos
* [ ] View count system
* [ ] Playlist management
* [ ] Tweet / community system
* [ ] Advanced caching
* [ ] Redis integration
* [ ] Rate limiting
* [ ] API documentation with Swagger
* [ ] Docker support
* [ ] Automated testing
* [ ] CI/CD pipeline
* [ ] Performance monitoring
* [ ] Horizontal scaling

---

# 🚀 Future Scaling Architecture

The current backend can later be extended into a more scalable architecture:

```text
                         ┌───────────────┐
                         │    Client     │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │ Load Balancer │
                         └───────┬───────┘
                                 │
                  ┌──────────────┼──────────────┐
                  ▼              ▼              ▼
             ┌─────────┐   ┌─────────┐   ┌─────────┐
             │ API #1  │   │ API #2  │   │ API #3  │
             └────┬────┘   └────┬────┘   └────┬────┘
                  │              │              │
                  └──────────────┼──────────────┘
                                 ▼
                         ┌───────────────┐
                         │     Redis     │
                         │    Cache      │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │    MongoDB    │
                         └───────────────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │  Cloudinary   │
                         │     CDN       │
                         └───────────────┘
```

---

# 🤝 Contributing

Contributions, issues and feature requests are welcome.

If you want to contribute:

```bash
git clone YOUR_REPOSITORY_URL
cd BACKEND
npm install
```

Create a new branch:

```bash
git checkout -b feature/new-feature
```

Make your changes and submit a pull request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Aditya Nayak**

Built as a backend engineering project to understand:

```text
Node.js
   ↓
Express.js
   ↓
REST APIs
   ↓
MongoDB
   ↓
Authentication
   ↓
File Uploads
   ↓
Cloudinary
   ↓
Production Deployment
```

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

**Repository:**
`YOUR_GITHUB_REPOSITORY_URL`

**Live API:**
`YOUR_PRODUCTION_API_URL`

**Postman Collection:**
`YOUR_POSTMAN_COLLECTION_URL`
