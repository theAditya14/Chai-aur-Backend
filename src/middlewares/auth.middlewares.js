// ye middlewere check kare ga ki user verify h ya nhi .  (Is this request actually coming from an authenticated user?)
import ApiError from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from  'jsonwebtoken'
import User from '../models/user.model.js'

  const verifyJWT = asyncHandler( async(req, _, next) =>{
       
 try {
     const Token =  req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")   //(req.header -> auger req.cookies ke under accessToken nhi aya to req.header me check karo or Bearer ko hata to or sirf acccessToken de do)
    
      console.log( "CHECK REQUEST HEADER: ",Token)
    
   
      if (!Token) {
        throw new ApiError(401, "Unauthorized Request")
      }
   
      // idher hum check kar rhe h ki jo token aya h humare pass me wo shi h ya nhi . to usko verify kate /decode karte h
   
     const decodeToken =  jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET)
   
     const user  =  await User.findById(decodeToken?._id).select("-password -refreshToken");
   
      if(!user){
       throw new ApiError(401, "Invalid Access Token ")
      }
       
   //  req ke under hum ek naya obj add kar diya 
     req.verifyToken = user;
     next();
 } catch (error) {
    throw new ApiError(401,error?.message || "Invalid Access Token")
 }
});


export default verifyJWT;