const fs = require("fs");

const numArr = [1,2,3,4,5];

/*
    fs.writeFile(file,data,[option], callback) {}
    비동기 방식으로 파일 쓰기 - 순서 확인해볼것.
*/

numArr.forEach(num=>{
    const title = "async"+num;
    const data = `파일이 잘 만들어졌어요 제이름은 '${title}.txt'입니다. ~`;

    fs.writeFileSync(`${title}.txt`,data,(err,data)=>{
        if(err) return console.log(err.message);
        console.log(`${title} 비동기 방식이라 순서가 뒤죽박죽`);
    });
});

/*
    fs.writeFile (file, data, [options],callback){}
*/ 

numArr.forEach((num)=>{
    const title = 'async' + num;

    fs.readFile(`${title}.txt`,(err, data) =>{
        if(err) return console.log(err.message);
        console.log(`${title}.txt 파일에은 아래의 데이터가 있습니다. \n"${data}\n`);
    })
})