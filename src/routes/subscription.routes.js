import { Router } from "express";
import verifyJWT from "../middlewares/auth.middlewares";




const router = Router();
router.use(verifyJWT)

router.route("/subscribe/:channelId").post(toggleSubscription)

export {router}