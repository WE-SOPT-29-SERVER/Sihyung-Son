//function Scope
// var
if (true){
    var x ="var";
}
console.log(`var : ${x}`);

//Block Scope
//let or const
/*if(true){
    let y="let";
    const z="const";
}
console.log(`let : ${y}`); //바깥에서 사용 못함
console.log(`let : ${z}`); //똑같음*/

//Function Scope
//var is inaccessible from outside of the funciton

function colorFunction(){
    if(true){
        var color = "blue";
        console.log(color);
    }
    console.log(color);
}
colorFunction();
console.log(color);// function을 벗어나서 에러 출력함.
