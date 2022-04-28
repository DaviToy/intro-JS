// ejercicio 1
var num = prompt ('Escribe un numero')
if(num % 2 == 0 ){
    alert(num+ ' Es divisible entre 2')
}else{
    alert('El numero no es divisible entre 2')
}

// ejercicio 2
var num = prompt('Escribe un numero')
if(num % 2 == 0){
    alert(num+ ' Es par')
}else{
    alert(num+ ' Es impar')
}

// ejercicio 3
var num = prompt('Escribe un numero')
if(num = 1000){
    alert('Ganaste un premio')
}else{
    alert('Lo sentimos, sigue participando')
}

// ejercicio 4
var num1 = prompt('Escribe el primer numero')
var num2 = prompt('Escribe el segundo numero')
if(num1 < num2){
    alert(num1+ ' Es menor')
}else{
    alert(num2+ ' Es menor')
}

//Ejercicio 5
var num1 = prompt('Escriba el primer numero')
var num2 = prompt('Escriba el segundo numero')
var num3 = prompt('Escriba el tercer numero')
if(num1 > num2 && num1 > num3){
    alert(num1+ ' Es mayor')
}else if(num2 > num1 && num2 > num3){
    alert(num2+ ' Es mayor')
}else if(num3 > num2 && num3 > num1){
    alert(num3+ ' Es mayor')
}else if(num1 == num2){
    if(num3 > num1 ){
        alert(num3+ ' Es mayor')
    }else{
        alert(num1+ ' y ' +num2+ ' son iguales y mayores a ' +num3)
    }
}else if(num1 == num3){
    if(num2 > num1){
        alert(num2+ ' Es mayor')
    }else{
        alert(num1+ ' y ' +num3+ ' son iguales y mayores a ' +num2)
    }
}else if(num2 == num3){
    if(num1 > num2){
        alert(num1+ ' Es mayor')
    }else{
        alert(num2+ ' y ' +num3+ ' son iguales y mayores a ' +num1)
    }
}else if(num1 == num2 && num1 && num3){
    alert('Los tres numeros son iguales')
}

//Ejercicio 6
var nombre = prompt('Escriba su nombre')
var edad = prompt('Escriba su edad')
if(edad >= 18){
    alert('Puede ingresar a la discoteca')
    if(nombre == 'Mario' || nombre == 'Carlos'){
        alert('Tiene pase VIP')
    }
}else{
    alert('No puede ingresar')
}