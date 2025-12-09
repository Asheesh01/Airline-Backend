const { error } = require("cli")
const{StatusCodes}=require("http-status-codes")
const{ErrorResponse}=require("../utils/common")
function CreationMiddleware(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message="Something went wrong while creation";
        ErrorResponse.error="Model number is not found in the incoming request";
            return res.
                      status(StatusCodes.BAD_REQUEST)
                      .json(ErrorResponse)
    }

    next()
}

module.exports={
    CreationMiddleware
}