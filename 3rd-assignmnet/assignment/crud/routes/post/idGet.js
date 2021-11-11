const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");
const router = require(".");

module.exports = async(res,req)=>{
    const id =Number(req.params.id);

    const existingPost =posts.filter(post=>post.id === id)[0]; //post가 존재하는지
    if(!existingPost){
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND,responseMessage.NULL_VALUE));
    }

    const post = posts.filter(post=>post.id === id); //post 값 불러오는거

    if(post.length===0){
        return res.stats(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND,responseMessage.NO_POST));
    }

    return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.READ_POST_SUCCESS,post))
}