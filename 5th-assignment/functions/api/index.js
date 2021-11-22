const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const hpp = require("hpp");
const helmet = require("helmet");

// 보안 상 깃허브에 올리면 안 되는 정보를 .env라는 파일로 관리하기 위해 사용하는 모듈
dotenv.config();

//initializing
const app = express();

//Cors-Origin Resource Sharing을 열어주는 미들웨어
app.use(cors());

//보안을 위한 미들웨어
// process.env.NODE_ENV는 배포된 서버에서는 'production'으로, 로컬에서 돌아가는 서버에서는 'development'로 고정
if(process.env.NODE_ENV == "production"){
    app.use(hpp());
    app.use(helmet);
}

//request에 담긴 정보를 json 형태로 파싱하기 위한 미들웨어들
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//라우팅 : routes 폴더로 관리
app.use("/", require("./routes"));

//route 폴더에 우리가 지정할 경로로 요청이 올 경우,
//잘못된 경로로 요청이 들어왔다는 메시지를 클라이언트에 보냄
app.use("*", (req,res)=>{
    res.status(404).json({
        status : 404,
        success : false,
        message : "잘못된 경로입니다.",
    });
});

//express를 firebase functions로 감싸주는 코드
module.exports = functions
.runWith({
    timeoutSeconds : 300,
    memory : "512MB",
}
).region("asia-northeast3")
.https.onRequest(async(req,res)=>{
    //들어오는 요청에 대한 로그를 콘솔에 찍기, 디버깅 때 유용하게 쓰일 예정
    //콘솔에 찍고 싶은 내용을 원하는 대로 추가하면됨 ex) req.headers. req.query 등

    console.log("\n\n","[api]",`[${req.method.toUpperCase()}]`,req.originalUrl,req.body);

    //맨 뒤에 선언된 express app 객체를 리턴
    //이것이 functions indes.js 안의 api: require("./api")에 들어가는것
    return app(req,res);
})