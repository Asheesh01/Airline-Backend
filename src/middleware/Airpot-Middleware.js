const{StatusCodes}=require("http-status-codes")
const{ErrorResponse}=require("../utils/common");
const AppError = require("../utils/errors/app-error");
function CreationMiddleware(req,res,next){
    if(!req.body.name){
        ErrorResponse.message="Something went wrong while creation of airpot";
        ErrorResponse.error=new AppError(["Model not found in the upcoming request in the correct form"],StatusCodes.BAD_REQUEST)
            return res.
                      status(StatusCodes.BAD_REQUEST)
                      .json(ErrorResponse)
    }
    if(!req.body.cityId){
        ErrorResponse.message="Something went wrong while creation of airpot";
        ErrorResponse.error=new AppError(["cityId not found in the upcoming request in the correct form"],StatusCodes.BAD_REQUEST)
            return res.
                      status(StatusCodes.BAD_REQUEST)
                      .json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.message="Something went wrong while creation of airpot";
        ErrorResponse.error=new AppError(["code not found in the upcoming request in the correct form"],StatusCodes.BAD_REQUEST)
            return res.
                      status(StatusCodes.BAD_REQUEST)
                      .json(ErrorResponse)
    }

    next()
}

module.exports={
    CreationMiddleware
}