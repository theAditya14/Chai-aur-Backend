import mongoose from "mongoose";
import { like } from "../models/like.model.js";
import { Video } from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";






const likeByUsers  = asyncHandler( async(req,res) =>{

    //  1 : get user id or video id 
    //  2 : aggregation pipeline
        //  i : find user / video 
        // ii : join like/video/user 


    const likeBy = req.verifyToken._id
    const {videoId} = req.params;

    if(!likeBy){
        throw new ApiError(404, "user id is required")
    }
    if(!videoId){
        throw new ApiError(404, "video id is required")
    }

   const video =  await  Video.findById(videoId);

   if(!video){
    throw new ApiError(400,"vodeo not found")
   }

 const existLike =   await like.findOne({
    likeBy,
    video : videoId

   })


   if(existLike){
     await like.findByIdAndDelete(existLike._id)
     return res
     .status(200)
     .json( new ApiResponse(200, {}, "Remove video like"))

   } else{
     const newLike = await like.create({likeBy, video : videoId})
    //   console.log(newLike);
    
     return res
     .status(200)
     .json( new ApiResponse(200 , newLike ,"like successfully" ))
   }



})



const getAllLiked  = asyncHandler(async(req,res) =>{
 const {videoId} = req.params;
  console.log(videoId);
  
 if(!videoId){
    throw new ApiError(400,"video id is required")
 }

//  const getVideoAllLike = await like.findOne({video: videoId} );



//  if(!getVideoAllLike) {
//     throw new ApiError(400, "video is founded")
//  }

  const totlelike =  await like.countDocuments(videoId)
console.log(totlelike)

 



})




export {likeByUsers,getAllLiked}