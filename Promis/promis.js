const promisOne = new Promise( function(resolve,reject) {

    setTimeout(function () {
     console.log("Hello Async call completed");
     resolve()
    },1000)
})

promisOne.then(function (){
    console.log("Promised Consume");
})

new Promise(function (resolve,reject)
{
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    } ,1000)
}).then(function (){
    console.log("Async 3");
})