const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getPostByUserId = async(client, userId)=>{
    const{ rows } = await client.query(
        `
        SELECT * FROM post
        WHERE user_id = $1
        AND is_deleted = FALSE
        `,
        [userId],
    );
    return convertSnakeToCamel.keysToCamel(rows);
};

const getPostByUserIds = async(client, userIds)=>{
    if(userIds.length < 1) return []
    const{ rows } = await client.query(
        `
        SELECT * FROM post
        WHERE user_id IN (${userIds.join()})
        AND is_deleted =FALSE
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = {getPostByUserId,getPostByUserIds};