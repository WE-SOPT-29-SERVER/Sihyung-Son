const express = require("express");
//express 모듈 불러오기
const router = express.Router(); 
//Router() 미들웨어 불러오기

router.get("/",(req, res)=>{//GET method로 api/요청이 들어온다. 
    const result = { //해당 로직을 실행
        status :200,
        msessage : "api~!",
    };
    res.status(200).send(result);
});

module.exports = router; //생성한 객체를 모듈로 변환