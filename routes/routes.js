

const express = require("express");

const router= express.Router();



const {register}= require("../controller/register")

// send email 

router.post("/register",register)

; 


module.exports = router;