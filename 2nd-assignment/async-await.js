let asyncFunc1 = msg=>{
    return new Promise(res=>{
        setTimeout(()=>{
            res(`func1 : ${msg}`);
        },1000);
    });
};

let asyncFunc2 = msg=>{
    return new Promise(res=>{
        setTimeout(()=>{
            res(`func2 : ${msg}`);
        });
    });
};

const PromiseMain = () =>{
    asyncFunc1("Hello").then(res=>{
        console.log(res);
        return asyncFunc2("word");
    }).then(res=>{
        console.log(res);
    });
};

//Async & Await
const asyncMain= async () =>{
    let result = await asyncFunc1("hello");
    console.log(result);

    result = await asyncFunc2("world");
    console.log(result);
}

//라면 함수
// Async & awmait ver
const asyncRamen= async ()=>{
    const step1 = await ramenRecipe();
    const step2 = await boilWater(step1);
    const step3 = await putTheRamenAndSoupPowder(step2);
    const finish = await delayThreeMinute(step3);
    console.log(finish);
};