/*
-----------------------------
        1. 배열 실습
-----------------------------
*/ 

/*let arr1 = [];
console.log(arr1); // [] 빈 배열 출력
console.log(typeof arr1); // 어떤 type인지 출력

let arr2 = new Array (1,2,3,4,5); //Array 생성자를 통해서 배열 생성
console.log(arr2);
console.log(typeof arr2);

let arr3 = ["손시형",1,2,3,null,{name:"sihyeong", age: 24}];
console.log(arr3);
console.log(typeof arr3);
*/

/*
---------------------------------
    2. 배열 prototype 메서드
---------------------------------
*/

console.log("**** Array 기본 함수들을 알아보자 ****")
let arr = [1,2,3,4];

//2-1, length
console.log(`arr의 길이 : ${arr.length}`) //백틱을 사용해서 한번에 출력

//2-2, push, pop
arr.push ("new item");
console.log("arr push : ",arr) //arr push :  [ 1, 2, 3, 4, 'new item' ]
//console.log(`arr push : ${arr}`) //arr push : 1,2,3,4,new item

arr.pop();
console.log("arr pop : ",arr);


//2-3 shift, unshift
arr.unshift("first item") //배열에 값 앞에 추가
console.log(arr)
arr.shift();
console.log("arr shift : ", arr); //배열 맨 앞의 값 삭제

//2-4 includes
console.log("arr.includes(4) : ", arr.includes(4)); //배열 속 해당 원소가 있으면 true / 없으면 false 출력
console.log("arr.includes(1000) : ", arr.includes(1000));

//2-5 indexof
console.log("arr.indexof(4) : ", arr.indexOf(4)); //해당 하는 원소의 첫번째 위치를 리턴한다 존재하지않으면 -1 리턴
console.log("arr.indexof(100) : ",arr.indexOf(100));

//2-6 concat 배열을 합쳐준다.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let concatArr = arr1.concat(arr2); // 먼저 오게 하고싶은 배열 먼저 적어준다. arr2가 앞으로 오게하고싶으면 arr2.concat(arr1)
console.log("arr1.concat(arr2) : ",concatArr); 

//2-7 join
let location = ["서울", "대전", "대구", "부산"];
console.log(location.join("-> ")); //해당 함수는 배열의 모든 값들을 연결한 문자열을 리턴한다.

//2-8 reverse
console.log(location.reverse().join("->" )); //거꾸로 출력

//2-9 sort
let contries =["Osterreich", "Andorra", "Vietnam"];
console.log(contries.sort((a,b)=>(a>b? 1:-1))); //삼항연산자를 사용하여 비교.
console.log(contries.sort(function(a,b){
    return a.localeCompare(b); //문자열과 문자열을 비교 (유니코드 기준으로 문자 정렬)
    }),
);
console.log(
    "오름차순 정렬 : ",
    concatArr.sort((a,b)=>a-b) //화살표 함수표현으로 array 정렬시 a-b는 오름차순 b-a는 내림차순
);
console.log(
    "내림차순 정렬 : ",
    concatArr.sort(function(a,b){
        return b-a;
    }),
);

//2-10 filter 필터는 배열 요소 전체를 대상으로 조건을 걸어서 그 조건을 충족하는 결과를 새로운 배열을 통해 반환해준다.
//let number = [100,234,-125,1,23,-637,-123,99,2,3,4,5];
//let minusNumber = number.filter(item =>item<0);
//console.log("minusNumber : ",minusNumber);

//2-11 map map은 배열 요소 전체를 대상으로 함수를 호출하고, 그 결과를 새로운 배여을 반환할때 주료 사용.
let countries =["Osterreich", "Andorra", "Vietnam", "Korea", "China"];
let countriesLengths = countries.map(item=>item.length);
console.log("countriesLengths : ", countriesLengths);

//2-12 reduce map은 배열을 반환할때 사용했지만 reduce는 값 하나를 반환할때 주로 사용 대표적인 예시로 1~n 까지 더하기
let number = [1,2,3,4,5,6,7,8,9,10];
let sum = number.reduce((previousValue,currentValue)=>{
    console.log(`previousValue : ${previousValue}, currentValue : ${currentValue}`);
    return previousValue + currentValue; //previousValue는 이전에 저장된 값 즉 더해진값이 나온다.
});
console.log("sum = ",sum);

let serverPart = [
    "강한희",
    "고성용",
    "구건모",
    "권세훈",
    "김영권",
    "김은지",
    "김진욱",
];

let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다.';
let serverPartMemverNameStr = '서버 파트 여러분 이름 한번씩만 불러주세요~';

for (let item in serverPart){ //for in은 반복변수에 index를 반환한다.
    serverIndexStr +=item+"! ";
}
console.log(serverIndexStr);

for (let item of serverPart){//for of는 해당 값을 리턴한다.
    serverPartMemverNameStr += item +"! ";
}
console.log(serverPartMemverNameStr);

serverPart.forEach(item =>{ //foreach 반복문은 오직 array 객체에서만 사용가능한 메서드이다.
    console.log(item);
})