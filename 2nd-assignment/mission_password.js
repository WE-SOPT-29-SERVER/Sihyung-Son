const crypto = require("crypto");

const fs = require("fs");

const password = fs.readFileSync(`password.txt`) 

const hex = crypto.createHash("sha512").update(password).digest("hex");

const salt=crypto.randomBytes(128).toString('hex');

const iterations = 100000;
const keylen = 64;
const digest = "sha512";

const callback = (err, derivedKey)=>{
    if(err) throw err;
    const hashed = derivedKey.toString("hex");
    fs.writeFileSync('hashed.txt',hashed,((err,hashed)=>{
        if(err) return console.log(err.message);
    }));
};
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);