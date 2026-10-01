import {Video}  from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudnary.js";
import verifyJWT from "../middlewares/auth.middlewares.js"


const UploadVideos = asyncHandler(async(req,res) =>{

//  1: get data from user 

const {title, description} = req.body;

if(!title){
    throw new ApiError(400,"Video title required")
}

// 2 : check for video
const localvideoFile = req.files['videoFile'][0]?.path;
const localthumbnail = req.files['thumbnail'][0]?.path;

console.log( "local File path : ",localvideoFile)

console.log( "local File path : ", localthumbnail)
 
if(!localvideoFile){
    throw new ApiError(404, "video is required")
}
if(!localthumbnail){
    throw new ApiError(404, "video thumbnail is required")
}

const video = await uploadOnCloudinary(localvideoFile);
const thumbnail = await uploadOnCloudinary(localthumbnail);

if(!video){
    throw new ApiError(404, "Video file upload failed! ")
}

if(!thumbnail){
    throw new ApiError(404, " thumbnail file upload failed! ")
}

const videoCreate = await Video.create({
    title,
    description,
    videoFile : video.url,
    thumbnail : thumbnail.url
   
})

await videoCreate.save();
console.log("Video Upload : ",videoCreate)

 return  res
.status(200)
.json( new ApiResponse( 200, videoCreate, "Video upload successfully"))


// what the problem is 
// 1 : auth , every one upload video
// 2 : user or video relation 
} );


// get all videos 
const getAllVideos = asyncHandler(async(req,res) =>{
        const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
})




export {UploadVideos}