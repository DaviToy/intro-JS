//Ejercicio 1
let array = [1,4,6,10,22,55,46,2,5,0]
let mayores = []
for(index in array){
    if(array[index]>3){
        mayores.push(array[index])
        index++
    }
}
alert(mayores)

//ejercicio 2
let arreglo = []
let indice = 0
while(indice<5){
    arreglo.push(indice)
    indice++
}
alert(arreglo)

