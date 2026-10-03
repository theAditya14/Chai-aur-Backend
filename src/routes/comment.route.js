import { Router } from 'express';
import {
    addComment,
    deleteComment,
    // getVideoComments,
    // updateComment,
} from "../controllers/comment.controller.js"
import verifyJWT from "../middlewares/auth.middlewares.js"

const commentRouter = Router();

commentRouter.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

commentRouter.route("/:videoId").post(addComment);
commentRouter.route("/c/:commentId").delete(deleteComment)

export  {commentRouter}