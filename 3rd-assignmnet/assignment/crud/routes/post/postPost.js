const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");

module.exports = async (req,res)=>{
    const{id,title,content,writers} = req.body;
    if(!id || !title || !content){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST),responseMessage.NULL_VALUE);
    }
    const writer = posts.filter(post=>post.writer===writers).length>0;
    if(!writer){ 
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST),responseMessage.NO_USER);
    }

    const newPost = {id:posts.length+1,title,content,writer};

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.CREATED_USER,newPost));
};
