//date

let myDate=new Date()
/*console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toLocaleString())

console.log( typeof myDate)
*/
let myCreatedDate=new Date(2023,0,23,5,8);
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toTimeString())

const myTime=Date.now();
console.log(myTime)
console.log(Math.floor(myTime/1000))

console.log(myCreatedDate.getFullYear())

console.log(myCreatedDate.getDay())

console.log(myCreatedDate.getMonth())