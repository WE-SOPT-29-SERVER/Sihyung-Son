//promise 선언

const { SSL_OP_COOKIE_EXCHANGE } = require("constants");

/*
const promise = new Promise(function(res,rej){
    //logic
})

const promise = new Promise((res,rej)=>{
    //logic
})
*/

//fulfilled && rejected

/*const promise = new Promise((res,rej)=>{
    const age = 25;
    if(age>20){
        res(age);
    }
});

//.then을 통해 전달.
promise.then((resData)=>{
    console.log(resData);
})
*/

//rect일때
const promise = new Promise((res,rej)=>{
    const age =25;
    if(age>20){
        res(age);
    }else{
        rej(new Error("나이가 넘 어립니다."));
    }
});

promise.then((resdata)=>{
    console.log(resdata)
}).catch(err=>{
    console.log(err);
});

//promise chaining
const cook=(callback,timeout)=>{
    setTimeout(callback,timeout);
};

const ramenRecipe = (() =>{
    return new Promise((res,rej)=>{
        cook(()=>{
            console.log("[라면 진행상황]");
            res("[라면 만들기 시작]");
        },1000);
    });
});

const boilWater = progress =>{
    return new Promise((res,rej)=>{
        console.log("[라면] - 1. 물 끓이기 시작");
        cook(()=>{
            res(`${progress} ------> 물 끓이기`);
        },2000);
    });
};

const putTheRamenAndSoupPowder = progress =>{
    return new Promise((res,rej)=>{
        console.log("[라면] - 2. 라면과 스프 넣기 완료, 앞으로 3분 간 끓이기 시작");
        cook(()=>{
            res(`${progress} -----> 면과 스프 넣기 후 3분간 끓이기`);
        },500);
    });
};

const delayThreeMinutes = progress =>{
    return new Promise((res,rej)=>{
        console.log("[라면] - 3. 3분간 대기 시작");
        cook(()=>{
            res(`${progress} ------> 라면 완성`);
        },3000);
    });
};

// 위는 정의한거.

//chaining
ramenRecipe().then(function(progress){
    boilWater(Progress);
}).then(function(progress){
    putTheRamenAndSoupPowder(progress);
}).then(function(progress){
    delayThreeMinutes(progress);
}).then(function(progress){
    console.log(progress);
});

//chaining 화살표함수
ramenRecipe()
.then(progress => boilWater(progress))
.then(progress => putTheRamenAndSoupPowder(progress))
.then(progress => delayThreeMinutes(progress))
.then(progress => console.log(progress));

//간단하게 바꾼거.
ramenRecipe().then(boilWater).then(putTheRamenAndSoupPowder).then(delayThreeMinutes).then(console.log);