import { Router } from "express"
import verifyJWT from "../middlewares/auth.middlewares.js"
import { getAllLiked, likeByUsers } from "../controllers/like.controller.js";




const like = Router();
like.use(verifyJWT)

like.route("/video-like/:videoId").post(likeByUsers)
like.route("/video-AllLike/:videoId").get(getAllLiked)
like.route("/video-like-on-comment/:commentId").get(getAllLiked)


export {like}