const num = 2;
const str = "2";

//동등 연산자 : 값만 비교
// == equal
// != not eqal

//console.log(num == str)
console.log(num+str);
console.log(typeof(num+str));
//22
//string

console.log(String(num)+String(str));
console.log(typeof (String(num)+String(str)));
//22
//string

//일치 연산자 : 값  & 타입 비교
// === equal
// !== not equal
console.log(num ===str);
//false