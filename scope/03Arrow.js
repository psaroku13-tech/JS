
const user={
    userName:"jdfds",
    email:"shsh@gmail.com",
    welcomeMessage:function()
{
    console.log(`${this.userName} welcome to website`)
}
}



user.welcomeMessage()




const ones=function()
{
   let username="tamato"
    console.log(this.username);
}

ones()

const trm=()=>{
    console.log("iop")
}

trm()


const addTwo=(n1,n2)=>
{
    return n1+n2
}

console.log(addTwo(7,4))

//implecit arrow function -> no need to keep the retun keyword
const three=(n1,n2)=>(n1+n2)

console.log(three(6,4))

//if we will pass the object then we need to follow the belo code

const fou=()=>({user:"saroj"})
console.log(fou())


//IIFE -> to remove the global scope pollution 

;(function onef(){
console.log("DB Connection");
})();


(()=>{
    console.log("Test")
})()

//Global Execution Context -> this

//Fuction execution context/Memory phase

//Eval execution context/Execution phase

//javacode run in 2 phases 

//1. Memory or creation phase variable will take space
//2. execution phase ->