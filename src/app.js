import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true }))
app.use(express.static('Public'))
app.use(cookieParser())


// //////////////


// routes import  segrigation of files
import {router} from '../src/routes/user.routes.js';
import { subscription } from '../src/routes/subscription.routes.js';
import { videoRouter } from './routes/video.routes.js';
import { like } from './routes/like.route.js';
import {commentRouter} from "./routes/comment.route.js"


//routes declaration
app.use('/api/v1/users', router)
app.use('/api/v1/subscription', subscription)
app.use('/api/v1/videoRouter', videoRouter)
app.use('/api/v1/like',like)
app.use("/api/v1/comments", commentRouter)


 
export default app
