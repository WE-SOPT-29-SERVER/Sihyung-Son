const { values } = require("./members");

const func = () =>{
    //logic
};

module.exports = func;

const object = {
    key:values,
    key2 :value,
    method : function(){
        //..
    },
};

//sum.js
function sum(a,b){
    return a+b;
}

module.exports = sum;

//main.js
const sum = require('./sum');
const reuslt = sum(1,3);
console.log("sum result : ",reuslt);