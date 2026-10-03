import mongoose from "mongoose";
import { like } from "../models/like.model.js";
import { Video } from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { comments } from "../models/comments.model.js";


///  toggle like on video
const likeByUsers  = asyncHandler( async(req,res) =>{


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


// get all likes on videos;
const getAllLiked  = asyncHandler(async(req,res) =>{
 const {videoId} = req.params;
  // console.log(videoId);
  
 if(!videoId){
    throw new ApiError(400,"video id is required")
 }

  const totlelike =  await like.countDocuments({video : videoId})
  
  const Users = await like.find({video : videoId}).populate("likeBy", "username  avatar fullName")
  console.log(Users)

return res
.status(200)
.json( new ApiResponse(200,[totlelike ,Users], "All Likes are fetch successfully! "))

 



})


//  toggle like on comment
const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    const user = req.verifyToken._id

    if(!commentId){
      throw new ApiError(400, "comment id is required")
    }
    if(!user){
      throw new ApiError(400, "user id is required")
    }


    const comment = await comments.findById(commentId)
    
    const exisitinCommentLike = await like.findOne({
          likeBy : user,
          comments : commentId
    })


    if(exisitinCommentLike){
       await like.findByIdAndDelete(exisitinCommentLike._id)
       return res
       .status(200).json( new ApiResponse(200, [], "like on comment is remove"))

    } else {
     const commentLike =  await like.create({
        likeBy : user,
        comments : commentId
      })

      return res
      .status(200).json( new ApiResponse(200, commentLike, " like successfuly of comment"))
    }






})





export {likeByUsers,getAllLiked,toggleCommentLike}