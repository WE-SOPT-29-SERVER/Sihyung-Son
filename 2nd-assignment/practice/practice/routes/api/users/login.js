const express = require('express');
const router = express.Router();

router.get("/login", (req, res)=>{
    const result = {
        status : 200,
        message : "login",
    };
    res.status(200).send(result);
});

module.exports = router;