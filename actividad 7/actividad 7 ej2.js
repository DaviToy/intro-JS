//ejercicio 2

const array = [1,2,3,4,10,11]
function myFunction(){
    let sum = array.reduce((a,b) => a+b, 0)
    console.log(sum)
}
myFunction()