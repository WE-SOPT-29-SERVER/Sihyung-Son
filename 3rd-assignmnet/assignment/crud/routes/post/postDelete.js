const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");

module.exports=async(req,res)=>{
    const {id} = req.params;

    if(!id){
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND,responseMessage.NULL_VALUE));
    }

    const existingPost = posts.filter(post=>post.id === Number(id))[0];

    if(!existingPost){
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND,responseMessage.NO_POST));
    }

    const delete_post = posts.filter(post=>post.id !==Number(id));

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.DELETE_POST,delete_post));
};