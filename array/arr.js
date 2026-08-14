/*console.log("welcome to Array")

const myArr=[4,6,9,2,3];

console.log(myArr[2]);

const aA=new Array(1,3,5,8);

aA.push(90);

console.log(aA);

aA.pop();

aA.unshift(0)
aA.shift();

const mynew=aA.join();
//console.log(mynew)
//console.log(aA)

const myn1=aA.slice(1,4)
console.log(aA)
console.log(myn1);
const pp=aA.splice(1,2)
console.log(aA)
console.log(pp)

*/


//2nd Day Array

const mh=["spider","man","iron","spider"];
const dp=["dsp","hqpa","hpa"]
//mh.push(dp)
mh.concat(dp)
//console.log(mh)

//const dsp=mh.concat(dp)
//console.log(mh[4]);
const dap=[...mh,...dp]

console.log(dap);

const another=[1,2,4,[5,6,2],9,[4,6,9,[3,2]]]

const ap=another.flat(Infinity);

console.log(ap);

console.log(Array.isArray("domp"));

console.log(Array.from("hdghsjhs"))

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));

