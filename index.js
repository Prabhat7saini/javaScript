const callbackasync=()=>{
    setTimeout(()=>{
        console.log(typeof`${23}`)
    },10000)
};



const callbacksync=(a)=>{
    console.log(`number   a ${a}`);


}


const fun=(callbackasync)=>{
callbackasync();
}

const fun1=(callbacksync)=>{
callbacksync(34);
}
fun1(callbacksync);
fun(callbackasync);
console.log("hiiiiiiiiiiiiiiiiii");




















