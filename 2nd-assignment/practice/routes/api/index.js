const express = require("express");
//express 모듈 불러오기
const router = express.Router;
//Router()미들웨어 불러오기

router.get("/",(req,res)=>{ //Get method로 api/ 요청이 들어온다.
    const result ={ //해당 로직을 실행
        status:200,
        message: "api~!",
    };
    res.status(200).send(result);
});

router.use("/api", require("./api"));
module.exports = router //생성한 router 객체를 모듈로 변환