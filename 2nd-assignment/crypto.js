//crypto 문자열을 암호화, 복호화, 해싱하는 모듈이다
//복호화 할 수 없는 암호화 방식, aka 해싱, 비밀번호 암호화에 주로 사용한다.
const crypto = require("crypto");

const password = "serveristhebest";

const hex = crypto.createHash("sha512").update(password).digest("hex");

const base64 = crypto.createHash("sha512").update(password).digest("base64");


//createHash-> 해시 값을 반환 md5, sha256,sha 512등의 알고리즘 입력 주로 sha512 사용

//update -> 변환할 문자열을 입력한다.

//digest -> base64, hex등의 인코딩 알고리즘 입력.

console.log("hex : ", hex);
console.log("\n\nbase64 : ", base64);

//Salt 는 암호화 중 해싱을 할 때 추가되는 임의의 문자열 password+salt -> digest 데이터 베이스에 salt와 password를 같이 저장해주어야함...

//key stretching 반복적으로 해싱하는 암호화 방식 해싱된 암호를 다시 입력값으로 넣고 n번 동안 해싱.

const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";

const iterations = 100000;
const keylen = 64;
const digest ="sha512";

const callback(err, derivedKey)=>{
    if(err) throw err;
    console.log(derivedKey.toString("hex"));
};

crypto.pbkdf2(password,salt,iterations,keylen,digest,callback);

const encrypt = (salt, password)=>{
    crypto.pbkdf2(
        password,
        salt.toString(),
        1,
        32,
        "sha512",
        (err,derivedKey)=>{
            if(err) throw err;
            const hashed =derivedKey.toString("hex");

            console.log("salt :", salt);
            console.log("hased : ", hashed);
        },
    );
};

const password = "fl0wer";
const salt = crypto.randomBytes(32).toString("hex");
encrypt(salt,password);