const members = require("./members");

const getOnline = members =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const data = members.filter(l => l.location ==="online");
            res(data);
        },500);
    });
};


const getoffline = members =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const data = members.filter(l=>l.location==="offline");
            res(data);
        },500);
    });
};

const getYB = memebers =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const data = members.filter(l=>l.group ==="YB");
            res(data);
        },500);
    });
};

const getOB = members =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const data = members.filter(l=>l.group ==="OB");
            res(data);
        },500)
    })
}

//getOnline(members).then(x => getOB(x)).then(console.log);
//getYB(members).then(x=>getoffline(x)).then(console.log);

const asynFunction = async members=>{
    const onlineMembers = await getOnline(members);
    const getobmember = await getOB(onlineMembers);
    console.log(getobmember);
};

const async1Function = async members=>{
    const getybmembers = await(members);
    const getoflinemembers = await(getybmembers);
    console.log(getoflinemembers);
}

asynFunction(members);
async1Function(members);