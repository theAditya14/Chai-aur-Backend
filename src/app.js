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
import {subscription} from '../src/routes/subscription.routes.js'

//routes declaration
app.use('/api/v1/users', router)
app.use('/api/v1/subscrib', subscription)


export default app  
