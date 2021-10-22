const express = require("express") // express 모듈 불러오기
const router = express.Router();

router.get("/",(req,res)=>{
    const result = {
        status :200,
        message : "blog에 접근합니다.",
    };

    res.status(200).send(result);
});

module.exports = router // 생성한 router 객체를 모듈로반환