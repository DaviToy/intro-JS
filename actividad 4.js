//ejercicio 2
var numero = prompt('ingrese un numero')
let contador = 0
let multiplos = []
while(numero >= 0 && contador < numero){
    contador +=1
    if(contador % 5 == 0){
        multiplos.push(contador)
        contador +=1
    }
    
}
console.log(multiplos)
alert(multiplos)

//ejercicio 3
var numero = prompt('Ingrese un numero')
let i = 0
let multiplo = []
do{
    i +=1
    if(i % 5 == 0){
        multiplo.push(i)
        i +=1
    }
}while(numero >= 0 && i < numero)
alert(multiplo)

//ejercicio 4
var num = 0
let impar = []
for(index = 0; index<50; index++){
    if(index % 2 != 0){
        num+=1
        impar.push(index)
    }
}
console.log(impar)
alert(impar)
