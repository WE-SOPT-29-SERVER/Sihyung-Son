/*Object 생성자 함수*/
const person = new Object(); //빈 객체를 생성

//프로퍼티 추가
person.name = "손시형";//점표기법 접근
person.part = "Server";
person["group"] = "YB"; //브라켓 표기법 접근
person.sayhello = function(){
    console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log(typeof person); //타입
console.log(person);//json형태 반환

person.sayhello();

console.log("===================");

/*객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {};
console.log(typeof emptyObject); //Object

const animal = {
    animalType : 'dog',
    animalName : '뽀삐',
    animalFriends: ["코코","초코","쿠키"],
    bark:function() {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function(){
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal);
animal.bark();
animal.thisFriends();