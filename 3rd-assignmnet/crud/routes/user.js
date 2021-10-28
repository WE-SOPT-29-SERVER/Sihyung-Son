const express = require("express");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const statusCode = require("../../constants/statusCode");
const responseMessage = require("../../constants/responseMessage");
const router = express.Router();

router.post('/signup',(req,res)=>{
    const {id,name,password, email} = req.body;
    //const id = req.body.id 는
    //const {id}=req.body 와 동일
    if(!id || !name || !password || !email){
        return res.status(400).send(util.fail(400),"BAD REQUEST");
    }

    const alreadyUser = users.filter(uesr=>user.email === email).length >0;
    if(alreadyUser){
        return res.status(409).send(util.fail(409,"ALREADY EMAIL"));
    }

    const newUser = {id,name,password,email}

    user.push(newUser)

    res.status(200).send(util.success(200,"회원가입 성공!",newUser));
});

router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(!email){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE),
        );
    }
    const user = users.filter(user=>user.email ===email)[0];

    if(!user){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER),
        );
    }
    if(user.password !==password){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.MISS_MATCH_PW),
        );
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.LOGIN_SUCCESS,{
        user:{
            id : user.id,
            email : user.email,
            name : user.name,
            },
        }),
    );
});

router.get("/profile/:id",async(req,res)=>{
    const id = Number(req.params.id);

    const existingUser = users.filter(user=>user.id === id)[0];
    if(!existingUser){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NO_USER)
        );
    }
    return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.LOGIN_SUCCESS,{
        "userId":id
    }));
})
module.exports = router;