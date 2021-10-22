/*
    서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘(비율 오차범위 최소한으로 하기.)
*/ 

const member = require('./members')['members'];
var readline = require('readline');
var people;

var r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
ybs=[]; // YB 배열
obs=[]; // OB 배열

r.question("몇명으로 구성할까요?",function(answer){
    console.log(`${answer}명으로 조를 구성합니다.`);
    group(answer);
    r.close()
});
console.log();


for(let i=0; i<member.length; i++){
    if(member[i].group == "YB"){
        ybs.push(member[i]);
    }
    else{
        obs.push(member[i]);
    }
}

const group = (answer)=>{
    
}
