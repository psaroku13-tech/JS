const randomColor = function () {
    const hex='0123456789ABCDEF';
    let color='#'
    for(let i=0;i<6;i++)
    {
      color += hex[Math.floor( Math.random()*16)];
    }
    return color;
}
let interval;
const startChangeColor=function () {

 interval=setInterval(changec,1000)

function changec()
{
  document.body.style.backgroundColor=randomColor();
}
}

const stopChangeColor=function () {
clearInterval(interval);
interval=null;
}

document.querySelector("#start").addEventListener('click',startChangeColor)
document.querySelector("#stop").addEventListener('click',stopChangeColor)