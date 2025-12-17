const express = require('express');
const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes/index');
const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(ServerConfig.port, () => {
    console.log(`Successfuly Satarted the server on PORT : ${ServerConfig.port}`);
    Logger.info('Welcome in Server And ', { message: 'Server Started ' });
})