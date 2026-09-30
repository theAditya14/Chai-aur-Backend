import { Router } from "express"
import verifyJWT from "../middlewares/auth.middlewares.js"

import {toggleSubscription,getAllSubscribers} from "../controllers/subscription.controller.js"




const subscription = Router();
subscription.use(verifyJWT)

subscription.route("/subscriber/:channelId").post(toggleSubscription)
subscription.route("/:channelId/subscribers").get(getAllSubscribers)

export { subscription }