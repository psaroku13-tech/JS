
let array=[1,2,3,4,5,6,7]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
   // console.log(element)
}


const arr=[1,2,5,7,8,9,3]

for(const p of arr)
{
    console.log(p);
}

const map = new Map()
map.set('IN',"India")
map.set("US","America")
map.set("FR","France")

for(const [key,value] of map)
{
//console.log(key + ":-" +value)
}

const myObj={
    "game":"NFS",
    "game2":"SPID"
}

for(const key in myObj)
{
    //console.log(`${key} -> ${myObj[key]}`)
}


const coding=["js","java","ruby"]

coding.forEach( (val,index,coding)=>{
console.log(val + "->"+index+"->"+coding);
})


const myCoding=[{
    la:"javascript",
    lfile:"js"
},
{
    dp:"java",
    py:"py"
},
{
    cpp:"c++",
    c:"c"
},

]

myCoding.forEach((item)=>
{
    console.log(item.cpp);
})


const books=[
{title:"Book1",gender:"history",publish:1981,edition:1999},
{title:"Book2",gender:"Biology",publish:1951,edition:1979},
{title:"Book3",gender:"Zology",publish:1955,edition:2007},
{title:"Book4",gender:"english",publish:1981,edition:1999},
{title:"Book1",gender:"history",publish:1981,edition:1999},

]

const ed=books.filter((num)=>num.publish>=1981);

console.log(ed);


 const myNumbers =[1,4,6,8,9,2,4];

const mp= myNumbers.map((num)=>{return num+10})
console.log(mp);

const nap=myNumbers.map((num)=> num*10).map((numb1)=>numb1+5).filter((num)=>num>47)
console.log(nap)


const myNum=[1,2,4,7,9,5]

const myTotal=myNum.reduce((acc,curVal)=>(acc+curVal),0)

console.log(myTotal);


const shoppingCard=[
{
    itemName:"Js",
    price:2999
},
{
    itemName:"python",
    price:3000
},
]

const pr=shoppingCard.reduce((acc,item)=>acc+item.price,0);

console.log(pr);