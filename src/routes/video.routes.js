import {Router}  from "express";
import upload from '../middlewares/multer.js' 
import verifyJWT from "../middlewares/auth.middlewares.js";
import { getVideo, UploadVideos,getAllVideos } from "../controllers/video.controller.js";



const videoRouter = Router();



videoRouter.route("/uploade-video").post(
     upload.fields([
    {name : "videoFile", maxCount:1}, 
    {name : "thumbnail", maxCount:1}

]),
verifyJWT, UploadVideos)

videoRouter.route("/getVideo/:videoId").get(verifyJWT,getVideo)
videoRouter.route("/getAllVideo/:userId").get(verifyJWT,getAllVideos)


export {videoRouter}