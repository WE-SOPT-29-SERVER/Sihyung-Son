const express = require ("express");
const router = express.Router();

router.get("/signup",(req,res)=>{
    const result = {
        status : 200,
        message : "signup",
    };
    res.status(200).send(result);
});

module.exports = router;