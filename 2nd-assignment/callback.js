const { ftruncate } = require("fs");

//비동기식 callback
console.log('Hello');

setTimeout(()=>{
    console.log('Bye');
},3000)

console.log('Hello again');

//동기식 callback
function print(){
    console.log('print');
}

function PrintImmadiately(print){
    print();
}

PrintImmadiately(print);

//callback hell...

function cook(callback, timeout){
    setTimeout(callback,timeout);
}

cook(function(){
    cook(function ramenRecipe(){
        console.log("[라면 진행상황]");
        cook(function boilWater(){
            console.log("[라면] - 1. 물 끓이기 완료");
            cook(function putTheRamenAndSoupPowder(){
                console.log("[라면] - 2. 라면과 스프 넣기 완료, 앞으로 3분 끓이기");
                cook(function delayThreeMinute(){
                    console.log("라면 - 3. 3분 간 대기 완료, 라면 완성")
                },3000);
            },500);
        },2000);
    },1000);
},0); //0이라고 즉시실행아님... 웹마다 반응대기시간이있다.. 최소 4ms