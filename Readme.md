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


🎬 YouTube Backend API Documentation

This backend provides REST APIs for a YouTube-like video platform. It supports user authentication, video management, subscriptions, likes, and comments.

Base URL:

YOUR_BASE_URL/api/v1

Example:

https://your-domain.com/api/v1
📌 API Structure
/api/v1
│
├── users
│   ├── Authentication
│   ├── Profile
│   └── History
│
├── videoRouter
│   ├── Upload Video
│   ├── Get Videos
│   └── Publish/Unpublish
│
├── subscription
│   ├── Subscribe / Unsubscribe
│   ├── Channel Subscribers
│   └── Subscribed Channels
│
├── like
│   ├── Video Likes
│   └── Comment Likes
│
└── comments
    ├── Add Comment
    └── Delete Comment
👤 1. User APIs

User APIs handle authentication, profile management, password changes and watch history.

🔐 Login

POST

/api/v1/users/login

Logs an existing user into the application and creates the required authentication session/token.

Example:

POST /api/v1/users/login
{
  "email": "user@example.com",
  "password": "yourPassword"
}
🚪 Logout

POST

/api/v1/users/logout

Logs the currently authenticated user out and invalidates the active authentication session.

Example:

POST /api/v1/users/logout
🔑 Change Password

PATCH

/api/v1/users/changePassword

Allows an authenticated user to change their account password.

Example:

PATCH /api/v1/users/changePassword
{
  "oldPassword": "oldPassword",
  "newPassword": "newPassword"
}
🖼️ Update Avatar

PATCH

/api/v1/users/updateAvatar

Updates the authenticated user's profile avatar.

Example:

PATCH /api/v1/users/updateAvatar
Form Data:
avatar = <image file>
👤 Get User Profile

GET

/api/v1/users/profile/:username

Fetches the public profile information of a user using their username.

Example:

GET /api/v1/users/profile/aditya

Here:

:username = aditya
🕘 Get Watch History

GET

/api/v1/users/history

Returns the authenticated user's video watch history.

Example:

GET /api/v1/users/history
🎥 2. Video APIs

These APIs are responsible for uploading, retrieving and managing videos.

⬆️ Upload Video

POST

/api/v1/videoRouter/uploade-video

Uploads a new video along with its required information such as title, description and thumbnail.

Example:

POST /api/v1/videoRouter/uploade-video
Form Data:

videoFile = <video file>
thumbnail = <image file>
title = My First Video
description = This is my first video
🎬 Get Video

GET

/api/v1/videoRouter/getVideo/:videoId

Fetches information about a specific video using its video ID.

Example:

GET /api/v1/videoRouter/getVideo/64abc123...

Here:

:videoId = 64abc123...
📺 Get All Videos of a User

GET

/api/v1/videoRouter/getAllVideo/:userId

Returns all videos uploaded by a particular user.

Example:

GET /api/v1/videoRouter/getAllVideo/64abc123...

Here:

:userId = 64abc123...
🌐 Toggle Video Publish Status

PATCH

/api/v1/videoRouter/video-toggle/:videoId

Changes the video's publish status.

For example:

Published → Unpublished
Unpublished → Published

Example:

PATCH /api/v1/videoRouter/video-toggle/64abc123...
👥 3. Subscription APIs

Subscription APIs allow users to subscribe/unsubscribe to channels and retrieve subscriber information.

🔄 Toggle Subscribe

POST

/api/v1/subscription/toggle/:channelId

Subscribes the authenticated user to a channel. Calling the endpoint again can toggle the subscription off.

Example:

POST /api/v1/subscription/toggle/64abc123...

Here:

:channelId = ID of the channel/user
👥 Get Channel Subscribers

GET

/api/v1/subscription/channel/:channelId/subscribers

Returns the users who have subscribed to a particular channel.

Example:

GET /api/v1/subscription/channel/64abc123.../subscribers

Here:

:channelId = ID of the channel
📺 Get Channels Subscribed By User

GET

/api/v1/subscription/channel/:subscriberId/subscribed-to

Returns all channels that a particular user has subscribed to.

Example:

GET /api/v1/subscription/channel/64abc123.../subscribed-to

Here:

:subscriberId = ID of the subscriber
❤️ 4. Like APIs

Like APIs handle likes on videos and comments.

❤️ Toggle Video Like

POST

/api/v1/like/video-like/:videoId

Likes or unlikes a video for the authenticated user.

Example:

POST /api/v1/like/video-like/64abc123...

Calling the endpoint again can toggle the like:

Like → Unlike
Unlike → Like
👍 Get All Likes of a Video

GET

/api/v1/like/video-AllLike/:videoId

Returns information about the likes associated with a particular video.

Example:

GET /api/v1/like/video-AllLike/64abc123...

Here:

:videoId = ID of the video
💬 Like a Comment

POST

/api/v1/like/video-like-on-comment/:commentId

Likes or unlikes a comment.

Example:

POST /api/v1/like/video-like-on-comment/64abc123...

Here:

:commentId = ID of the comment
💬 5. Comment APIs

Comment APIs allow users to create and delete comments on videos.

💬 Add Comment to Video

POST

/api/v1/comments/:videoId

Adds a comment to a specific video.

Example:

POST /api/v1/comments/64abc123...
{
  "content": "Great video! 🔥"
}

Here:

:videoId = ID of the video
🗑️ Delete Comment

DELETE

/api/v1/comments/c/:commentId

Deletes a comment created by the authenticated user.

Example:

DELETE /api/v1/comments/c/64abc123...

Here:

:commentId = ID of the comment
🔐 Authentication

Endpoints that modify user data or perform actions on behalf of a user require authentication.

For example:

Login
   ↓
Authentication
   ↓
Access Protected APIs
   ↓
Logout

Protected APIs include operations such as:

Upload Video
Change Password
Update Avatar
Subscribe
Like Video
Like Comment
Add Comment
Delete Comment
Publish/Unpublish Video
Get Watch History
📋 Quick API Reference
Category	Method	Endpoint	Purpose
User	POST	/users/login	Login user
User	POST	/users/logout	Logout user
User	PATCH	/users/changePassword	Change password
User	PATCH	/users/updateAvatar	Update avatar
User	GET	/users/profile/:username	Get user profile
User	GET	/users/history	Get watch history
Video	POST	/videoRouter/uploade-video	Upload video
Video	GET	/videoRouter/getVideo/:videoId	Get video
Video	GET	/videoRouter/getAllVideo/:userId	Get user's videos
Video	PATCH	/videoRouter/video-toggle/:videoId	Toggle publish status
Subscription	POST	/subscription/toggle/:channelId	Subscribe/unsubscribe
Subscription	GET	/subscription/channel/:channelId/subscribers	Get subscribers
Subscription	GET	/subscription/channel/:subscriberId/subscribed-to	Get subscribed channels
Like	POST	/like/video-like/:videoId	Like/unlike video
Like	GET	/like/video-AllLike/:videoId	Get video likes
Like	POST	/like/video-like-on-comment/:commentId	Like/unlike comment
Comment	POST	/comments/:videoId	Add comment
Comment	DELETE	/comments/c/:commentId	Delete comment