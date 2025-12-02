const express=require('express');
const {ServerConfig,Logger}=require('./config');
const apiRoutes=require('./routes/index');
const app=express();
app.use('/api',apiRoutes);
app.listen(ServerConfig,() => {
    console.log(`Successfuly Satarted the server on PORT : ${ServerConfig}`);
    Logger.info("Ssadjidnd",{message:'nksnd  '});
})