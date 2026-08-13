//Object.create   //Singleton

const mySym = Symbol("key1")

const JsUser= {
    name:"don",
    email:"hp@gmail.com",
    [mySym]:"key23",
    age:18,
    location:"Bangalore",
    isLoggedIn:false
  }
//console.log(JsUser.email);
//console.log(JsUser["age"]);
//console.log(JsUser[mySym])

JsUser.email="abc@gmail.com";
//Object.freeze(JsUser);
JsUser.email="abc@yahoo.com";

console.log(JsUser)


JsUser.greeting= function()
{
     console.log("Hello Js User");
}

JsUser.greetingTwo=function()
{
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());