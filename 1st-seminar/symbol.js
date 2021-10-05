const symbol1 = Symbol("id"); // 심볼은 변경 불가능한 원시 타입의 값이며, 다른 값과 중복되지 않는 고유한 값이다. 안에 있는내용이 description이당
const symbol2 = Symbol("id");

console.log(symbol1.description);
console.log(symbol1 === symbol2); //false가 나온다 이건 서로 다른 고유한 값이라는 뜻이다.

const includes = Symbol("커스텀 includes 함수");

Array.prototype[includes]=function(){
    return "its Symbol";
};

var arr=[1,2,3];
console.log(arr.includes(1)); //js 기본 includes 함수 includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드입니다
console.log(arr["includes"](1)); //js 기본 includes 
console.log(arr[includes]()); //its symbol, 커스텀 includes 함수
