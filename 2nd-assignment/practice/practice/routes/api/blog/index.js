const express = require('express');
const router = express.Router();


router.get("/",(req, res)=>{
    const reusult ={
        status : 200,
        message : "blog입니다."
    };
    res.status(200).send(result);
});

module.exports = router;