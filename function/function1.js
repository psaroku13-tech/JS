

function myName()
{
console.log("h")
console.log("f")
console.log("p")
console.log("n")
console.log("d")
}

myName()

/*function addNumber(n1,n2)
{
    console.log(n1+n2)
}
*/

function addNumber(n1,n2)
{

    let result= n1+n2;
    return result
}

const result=addNumber(3,4)

console.log(result)



function addsum(n1)
{
    if(n1===undefined)
    {
        console.log("Please enter the value")
        return;
    }
    return n2=n1;
}

console.log(addsum("8"))

function calulateCarPrice(n2,n3,...n1)
{
return n1;
}

console.log(calulateCarPrice(3,8,10,20))


const user={
    name:"saroj",
    price:"1000"
}

function handleObject(anyObject)
{
console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject({name:"Sam",price:100})


const newArray=[100,200,400,700]
function mrp(getArray)
{
    return getArray[3];
}

console.log(mrp(newArray));
