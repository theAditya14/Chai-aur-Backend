// What is the use case of Utils Folder -> { Utils folder me wo reusable helper functions/classes hote hain jo backend ke multiple parts me common kaam aate hain.}



// Why we Use this function ?  
// answer => when we use mongoose for CURD operation so, when the request is taking time or aslo we need to error handling . But mongoose or there opereation we use everywhere so we can not write try Catch or error handling or async await on our code that is repitation so we create a function that can create once at a time  and use it every where in our folder 

const asyncHandler = (requestHandler) => { 
  return async  (req,res,next) => {
       
        try {
            await requestHandler(req,res,next)
        } catch (error) {
            res.status(error.code || 500).json({
                success :false,
                message : error.message
            })
        }

    } 


}


// another way of writng above code (Uper wala code or ye niche wala code dono same h )

// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }



export default  asyncHandler