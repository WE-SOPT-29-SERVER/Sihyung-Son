const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");

module.exports = async(req,res)=>{
    const {id} = req.params;
    const {new_title, new_content} = req.body;

    if(!new_title || !new_content){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE));
    }

    const existingPost = posts.filter(post=>post.id === id)[0]
    if(!existingPost){
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND,responseMessage.NO_POST)
        );
    }

    const updatePost = {...existingPost, title:new_title, content:new_content};

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.UPDATE_POST,updatePost));
}