import { Router } from "express";
import {registerUser,LoggedInUser,LoggoutUser} from "../controllers/user.controller.js";
import upload from '../middlewares/multer.js' 
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.route("/register").post(
    upload.fields(
      [  {
            name : 'avatar',
            maxCount : 1
        },
        
        {
            name : "coverImage",
            maxCount : 1
        }
    ]
    ),
    registerUser
)
    
router.route("/login").post(LoggedInUser)


//Secured Route

router.route("/logout").post(verifyJWT,LoggoutUser)

export { router }; 