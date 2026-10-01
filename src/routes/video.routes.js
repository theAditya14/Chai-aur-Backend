import {Router}  from "express";
import upload from '../middlewares/multer.js' 
import verifyJWT from "../middlewares/auth.middlewares.js";
import { UploadVideos } from "../controllers/video.controller.js";



const videoRouter = Router();



videoRouter.route("/uploade-video").post(
     upload.fields([
    {name : "videoFile", maxCount:1}, 
    {name : "thumbnail", maxCount:1}

]),
verifyJWT, UploadVideos)
// here i need to upload multiple files 


export {videoRouter}