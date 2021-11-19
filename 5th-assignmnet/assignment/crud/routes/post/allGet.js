const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");

module.exports = async(req,res)=>{
    const all ={posts};

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.READ_POST_SUCCESS,all));
}