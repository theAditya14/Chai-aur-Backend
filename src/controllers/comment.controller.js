import { comments } from "../models/comments.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"






// TODO: add a comment to a video
const addComment = asyncHandler(async (req, res) => {
    const {content} = req.body;
    const {videoId} = req.params;
    const user = req.verifyToken._id;


    if(!content){
        throw new ApiError(400, "add comment")
    }

    if(!videoId){
        throw new ApiError(400, "video id is required")
    }

    if(!user){
        throw new ApiError(402,"user Unauthorized!")
    }


    const userComment = await comments.create({
        content,
        owner : user,
        video : videoId
    })


    console.log(userComment);

    return res
    .status(200)
    .json( new ApiResponse(200, userComment, "commet is added successfully"))



















})




//Update comment i don't think it is important because user can delete there comment and add new 
const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
})

// TODO: delete a comment
const deleteComment = asyncHandler(async (req, res) => {
    const {commentId} = req.params;

    if(!commentId){
        throw new ApiError(200, "comment is not found")
    }

   const comment =  await comments.findById(commentId);

//    if(!comment){
//     throw new ApiError(400, "comment is not found")
//    }


     await comments.findByIdAndDelete(commentId);

    return res
    .status(200)
    .json(new ApiResponse(200, [], "comment is deleted successfully!"))


})


export {addComment,updateComment,deleteComment}