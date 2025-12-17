const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const { ErrorResponse } = require("../utils/common");

function CreateCityMiddleware(req,res,next){
    if(!req.body.name){
         ErrorResponse.message="Something went wrong while creation";
        ErrorResponse.error=new AppError(["City name  not updated in the upcoming request in the correct form"],
            StatusCodes.BAD_REQUEST)
            return res.
                      status(StatusCodes.BAD_REQUEST)
                      .json(ErrorResponse)
    }

    next()
}

module.exports={
    CreateCityMiddleware
}