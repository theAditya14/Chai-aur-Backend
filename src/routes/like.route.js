import { Router } from "express"
import verifyJWT from "../middlewares/auth.middlewares.js"
import { likeByUsers } from "../controllers/like.controller.js";




const like = Router();
like.use(verifyJWT)

like.route("/video-like/:videoId").post(likeByUsers)


export {like}