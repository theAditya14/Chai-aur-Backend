import mongoose,{Schema} from "mongoose";


const commentSchema = new Schema(
    {
        content :{
            type : String,
            require : true
        },

        video : {
         type : Schema.Types.ObjectId,
        ref : "Video"
        },

         owner : {
                type : Schema.Types.ObjectId,
                ref : "User"
         }
        
    }
)


const comments = mongoose.model("comments",commentSchema);
export {comments}