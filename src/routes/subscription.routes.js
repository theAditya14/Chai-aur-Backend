import { Router } from "express"
import verifyJWT from "../middlewares/auth.middlewares.js"

import {toggleSubscription,getAllSubscribers,getSubscribedChannels} from "../controllers/subscription.controller.js"




const subscription = Router();
subscription.use(verifyJWT)

subscription.route("/toggle/:channelId").post(toggleSubscription)
subscription.route("/channel/:channelId/subscribers").get(getAllSubscribers)
subscription.route("/channel/:subscriberId/subscribed-to").get(getSubscribedChannels)

export { subscription }