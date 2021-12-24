const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllUsers = async(client)=>{
  const {rows} = await client.query(
    `SELECT * FROM "user"u
    WHERE is_deleted = FALSE
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};
// const getAllUsers = async (client) => {
//     const { rows } = await client.query(
//         `
//         SELECT * FROM "user" u  //따옴표가 붙은이유는 지정어여서
//         WHERE is_deleted = FALSE //완전 삭제가 아닌 true false로 비활성화를 해놓은것.
//         `,
//     );
//     return convertSnakeToCamel.keysToCamel(rows[0]);
// };

const getUserById = async (client, userId)=>{
  const{rows}= await client.query(
    `
    SELECT * FROM "user" u
    WHERE id = $1
    `,
    [userId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getUserByIdFirebase = async (client, idFirebase) => {
    const { rows } = await client.query(
        `
        SELECT * FROM "user" u
        WHERE id_firebase = $1
        AND is_deleted = FALSE
        `,
        [idFirebase],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
};

const getUserByEmail = async (client, email) => {
  const { rows } = await client.query(
    `
    SELECT * FROM "user" u
    WHERE email = $1
      AND is_deleted = FALSE
    `,
    [email],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const updateUser = async(client, userId, username, phone)=>{
  const {rows:existingRows}=await client.query(
    `
    SELECT * FROM "user" u
    WHERE id = $1
    AND is_deleted = FALSE
    `,
    [userId],
  );

  if(existingRows.length <1 ) return false;

  const data = _.merge({},convertSnakeToCamel.keysToCamel(existingRows[0]), {username,phone})

  const {rows} = await client.query(
    `
    UPDATE "user" u
    SET username = $1, phone = $2, updated_at = now()
    WHERE id = $3
    `,
  [data.username,data.phone,userId],);
  return convertSnakeToCamel.keysToCamel(rows[0]);
} 
// const updateUser = async (client, username, phone, userId) => {
//   const { rows: existingRows } = await client.query(
//     `
//     SELECT * FROM "user"
//     WHERE id = $1
//        AND is_deleted = FALSE
//     `,
//     [userId],
//   );

//   if (existingRows.length === 0) return false;

//   const data = _.merge({}, convertSnakeToCamel.keysToCamel(existingRows[0]), { username, phone });

//   const { rows } = await client.query(
//     `
//     UPDATE "user" u
//     SET username = $1, phone = $2, updated_at = now()
//     WHERE id = $3
//     RETURNING * 
//     `,
//     [data.username, data.phone, userId],
//   );
//   return convertSnakeToCamel.keysToCamel(rows[0]);
// };

//delete문 할때 꼭 where문 확인 할 것.
const deleteUser = async(client, userId)=>{
  const{rows}= await client.query(
    `
    UPDATE "user"u
    SET is_deleted = TRUE, updated_at = now()
    WHERE id = $1
    RETURNING *
    `,
    ['userId'],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

const addUser = async (client, email, username, phone, idFirebase) => {
  const { rows } = await client.query(
    `
    INSERT INTO "user"
    (email, username, phone, id_firebase)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `,

    [email, username, phone, idFirebase],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllUsers, getUserById, getUserByIdFirebase, getUserByEmail, updateUser, deleteUser, addUser };