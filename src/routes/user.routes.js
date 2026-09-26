import { Router } from "express";
import {
    registerUser,
    LoggedInUser,
    LoggoutUser,
    Change_Password,
    Update_Avatar,
    getUserChannelProfile

} from "../controllers/user.controller.js";
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
router.route("/changePassword").post(verifyJWT,Change_Password)
router.route("/updateAvatar").patch(verifyJWT, upload.single("avatar"),Update_Avatar)
router.route("/profile/:username").get(verifyJWT, getUserChannelProfile)

export { router }; 