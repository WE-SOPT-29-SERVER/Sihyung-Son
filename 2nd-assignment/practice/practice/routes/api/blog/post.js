const express = require("express");
const router = express.Router();

router.get("/blog/post",(req, res)=>{
    const result = {
        status :200,
        message : "blog post",
    };
    res.status(200).send(result);
});

module.exports = router;