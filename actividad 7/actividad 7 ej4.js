//ejercicio 4
var temp = 64.4
var scale = 1
var res = 0
function convTemp(temperatura, escala){
    if(escala == 0){
        res = (temperatura*9/5)+32
    }else{
        res = (temperatura-32)*5/9
    }
    return res
}
console.log(convTemp(temp, scale))
var temp1 = prompt("Ingresa una temperatura: ")
var scale1 = prompt("En que escala esta tu temperatura: ")