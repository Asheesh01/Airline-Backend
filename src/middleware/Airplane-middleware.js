const { error } = require("cli")
const{StatusCodes}=require("http-status-codes")
const{ErrorResponse}=require("../utils/common");
const AppError = require("../utils/errors/app-error");
function CreationMiddleware(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message="Something went wrong while creation";
        ErrorResponse.error=new AppError(["Model not found in the upcoming request in the correct form"],StatusCodes.BAD_REQUEST)
            return res.
                      status(StatusCodes.BAD_REQUEST)
                      .json(ErrorResponse)
    }

    next()
}

module.exports={
    CreationMiddleware
}