import { Video } from "../models/video";
import ApiError from "../utils/apiError";
import ApiResponse from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import uploadOnCloudinary from "../utils/cloudnary";


const UploadVideos = asyncHandler(async(req,res) =>{

//  1: get data from user 

const {title, description} = req.body;

if(!title){
    throw new ApiError(400,"Video title required")
}

// 2 : check for video
const videoFile = req.files?.videoFile?.[0]?.path;

console.log(video)
 
if(!videoFile){
    throw new ApiError(404, "video is required")
}

const video = await uploadOnCloudinary(videoFile);

if(!video){
    throw new ApiError(404, "Video file upload failed! ")
}

const videoCreate = await Video.create({
    title,
    description,
    video : video.url,
   

})

await videoCreate.save();

return res.status(200).json( new ApiResponse( 200, videoCreate, "Video upload successfully"))

} );