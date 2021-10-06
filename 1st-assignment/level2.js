const members = [
    {name : "김진욱", residence:"어디였더라", age:26},
    {name : "김희빈", residence:"어디...", age:24},
    {name : "손시형", residence:"천안", age:24},
    {name :"정설희",residence:"상도", age:23}
];

members.forEach(member=>
    console.log(`이름은 ${member.name}이고, 사는곳은 ${member.residence}이며, 나이는 ${member.age} 입니다.`),
    );
