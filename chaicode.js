
// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (i=0 ;i<6 ; i++) {
    color+= hex[Math.floor(Math.random() *16)]
  }
  return color
}
let IntervelId ;
const startBgColor = function () {
IntervelId = setInterval (changeBg , 1000)
  function changeBg () {
    document.body.style.backgroundColor = randomColor() 
  }
  } ;

document.querySelector('#Start').addEventListener('click' , startBgColor )


const  stopBgColor =  function () {
  clearInterval(IntervelId) ;
  // IntervelId = null ;
}
document.querySelector('#Stop').addEventListener('click' , stopBgColor)



















