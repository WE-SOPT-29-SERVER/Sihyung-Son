// null, undefined
// let nothing = null;
// console.log(`nothing : ${nothing}, type : ${typeof nothing}`); //object(자바스크립트의 첫 버전부터 있었지만, 그 때 당시에도 고치기엔 이미 너무 늦어버렸던 버그.)

//let x;
//console.log(`x : ${x}, type ${typeof x}`);

//null vs undefined
console.log("null vs undefined");
console.log("null === undefined : ", null === undefined);
console.log("null == undefined : ", null == undefined);

console.log(typeof 1); //number
console.log(typeof "str"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof Symbol()); //symbol
console.log(typeof null); //object 이게 고쳐지지않은 버그 