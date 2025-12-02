const express=require('express');
const router= express.Router();
const {info}=require("../controllers/info-controller");
router.get('/info',info);
module.exports=router;