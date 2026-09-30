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


<!-- what i do in registration  -->

    step 1 - get user details from frontend
    step 2 - validation - not empty
    step 3 - check if user already exists: username,email
    step 4 - check for images, check for avatar
    step 5 - upload them to cloudinary , avatar
    step 6 - create user object - create entry in db
    step 7 - remove password and refresh token field from response
    step 8 - check for user creation 
    step 9 - return res

------------------
Login System . 

  1. we need to get users passsword ,email,username
  2. check the email or username is given by user or not
  3.find the user .  yes/not
  4. check passowrd is correct or not .
  5. access and refresh token check or send   (some code ,top of the code)
  6. res cookies.

<img width="965" height="791" alt="Screenshot 2026-09-21 161204" src="https://github.com/user-attachments/assets/e21f7f91-13cd-408d-a188-e871211ec0ca" />

----------------------------------------

How subscribe a User to another User/Channel .

   # 🔔 Subscription System

Subscription system ka purpose hai:

> **Kaun kis user/channel ko subscribe kar raha hai?**

Example:

```text
Rahul ───────────→ Aditya
subscriber          channel
```

---

## 1. Data Model

`Subscription` ek **relationship collection** hai.

```text
Subscription
├── subscriber → User ID
└── channel    → User ID
```

Example:

```text
subscriber = R456   // Rahul
channel    = A123   // Aditya
```

Meaning:

```text
Rahul → Aditya
```

### Golden Rule

```text
subscriber = jo Subscribe karta hai
channel    = jisko Subscribe kiya ja raha hai
```

---

## 2. Complete Flow

```text
              FRONTEND
                 │
                 │ Aditya's _id
                 ↓
        POST /subscribe/A123
                 │
                 ↓
              BACKEND
                 │
        ┌────────┴────────┐
        │                 │
        ↓                 ↓
  channelId          verifyJWT
    A123                  │
                          ↓
                   req.user._id
                       R456
        │                 │
        ↓                 ↓
      Aditya            Rahul
        │                 │
        └────────┬────────┘
                 ↓
          SUBSCRIPTION
                 │
                 ↓
       subscriber: R456
       channel:    A123
                 │
                 ↓
              MongoDB
```





<img width="1082" height="674" alt="image" src="https://github.com/user-attachments/assets/7b58ec7f-9bc1-450f-94e0-152040d88458" />

<img width="1202" height="362" alt="image" src="https://github.com/user-attachments/assets/005ffcea-bd6f-4c76-89a5-c440d703685e" />

<img width="1202" height="462" alt="image" src="https://github.com/user-attachments/assets/7c51cf26-791f-4c8f-8165-9bf43603d510" />




---

## 3. Frontend Se Kya Aayega?

Frontend ko sirf **target channel ki ID** bhejni hai.

Agar Rahul Aditya ki profile par hai:

```text
Aditya._id = A123
```

Request:

```http
POST /api/v1/subscription/subscriber/A123
```

Frontend ko `Rahul` ki ID bhejne ki zarurat nahi hai.

---

## 4. Rahul Ki ID Kahan Se Aayegi?

Rahul already logged in hai.

```text
Login
  ↓
JWT / Cookie
  ↓
verifyJWT
  ↓
req.user
  ↓
Rahul
```

Therefore:

```text
req.user._id = R456
```

So backend automatically knows:

```text
subscriber = Rahul
```

---

## 5. Subscribe Logic

```text
User clicks Subscribe
        ↓
Get channelId
        ↓
Get logged-in user
        ↓
Check existing subscription
        ↓
     ┌──────┴──────┐
     │             │
   EXISTS        NOT EXISTS
     │             │
     ↓             ↓
   DELETE         CREATE
     │             │
     ↓             ↓
 Unsubscribe    Subscribe
```

### Pseudocode

```text
FUNCTION toggleSubscription:

    channelId = request.params.channelId

    subscriberId = req.user._id

    Find:
        subscriber = subscriberId
        channel = channelId

    IF found:
        delete subscription
        return "Unsubscribed"

    ELSE:
        create subscription
        return "Subscribed"
```

---

## 6. API Route

`app.js`:

```js
app.use("/api/v1/subscription", subscription);
```

`subscription.routes.js`:

```js
subscription
    .route("/subscriber/:channelId")
    .post(toggleSubscription);
```

Final API:

```text
POST /api/v1/subscription/subscriber/:channelId
```

Example:

```text
POST http://localhost:8000/api/v1/subscription/subscriber/A123
```

---

## 7. Database Example

```json
{
  "subscriber": "R456",
  "channel": "A123"
}
```

Meaning:

```text
Rahul ─────────→ Aditya
```

---

## 8. `$lookup` Kahan Use Hoga?

Subscription me mostly IDs hoti hain:

```text
subscriber: R456
channel: A123
```

Agar hume actual user information chahiye:

```text
username
avatar
email
```

to `$lookup` se `User` collection se data la sakte hain.

```text
Subscription
      │
      ├── subscriber → User
      │
      └── channel    → User
```

---

## 9. Is Model Se Kya-Kya Kar Sakte Hain?

### Subscriber Count

```text
channel = Aditya
        ↓
count subscriptions
        ↓
Aditya's subscribers
```

### Aditya Ke Subscribers

```text
channel = Aditya
        ↓
find subscribers
        ↓
$lookup → User
```

### Rahul Ne Kinhe Subscribe Kiya?

```text
subscriber = Rahul
        ↓
find channels
        ↓
$lookup → User
```

### Is Rahul Subscribed To Aditya?

```text
subscriber = Rahul
AND
channel = Aditya
```

Found → `true`

Not found → `false`

---

# 🧠 Final Mental Model

```text
Frontend
   │
   │ "Kisko subscribe karna hai?"
   ↓
channelId
   │
   ↓
Backend
   │
   │ "Kaun subscribe kar raha hai?"
   ↓
JWT → req.user
   │
   ↓
Subscription
   │
   ├── subscriber
   └── channel
   │
   ↓
MongoDB
```

### Remember:

> **Frontend gives `channelId`.**
> **JWT gives `subscriberId`.**
> **Backend connects them.**
> **MongoDB stores the relationship.**

```text
subscriber ─────────→ channel

Rahul ──────────────→ Aditya
```



 FUNCTION toggleSubscription:

  Get channelId from request URL
   Get logged-in user's ID from JWT
    ↓
    subscriberId = req.user._id
     Check:
      Does subscription exist where:
       subscriber = subscriberId 
       AND
        channel = channelId 
        IF subscription exists:
         Delete that subscription 
         Return: "Unsubscribed successfully"
          ELSE:
           Create new subscription: 
           subscriber = subscriberId
          channel = channelId 
          Return: "Subscribed successfully"

    
<!-- GET All Subscribers of Channel -->

  // step 1:  Get channel ID 
  // step 2: Check channelId
  // step 3: Check channel/user exists ?
  // step 4:  Find all subscribers
   // 5. Send response
