import { like } from "../models/like.model.js";
import { Video } from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";






const likeByUsers  = asyncHandler( async(req,res) =>{

    //  1 : get user id or video id 
    //  2 : aggregation pipeline
        //  i : find user / video 
        // ii : join like/video/user 


    const user = req.verifyToken._id
    const {videoId} = req.params;

    if(!user){
        throw new ApiError(404, "user id is required")
    }
    if(!videoId){
        throw new ApiError(404, "video id is required")
    }

//    const video =  await  Video.findById(videoId);


    const likeVideo = await like.aggregate([

        {
           $lookup : {
            from : "videos",
            localField : "video",
            foreignField : "_id",
            as : "like"
           }          
        },


        {
            $addFields : {
                likeCount : {
                    $size : "$like"
                }
            }
        },

         {
            $project : {
                videoFiled : 1,
                title : 1,


            }
         }



    ])


console.log(likeVideo)


})

export {likeByUsers}