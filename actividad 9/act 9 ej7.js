/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
    * 
    Object
*/
const objeto = {};
Object.defineProperty(objeto, 'color'){
    value:"azul"
    writable:true
    enumerable:true
    configurable:true
}
Object.defineProperty(objeto,'size'){
    value:"3m"
    writable:true
    enumerable:true
    configurable:true
}
Object.defineProperty(objeto,'peso'){
    value:"3kg"
    writable:true
    enumerable:true
    configurable:true
}
Object.defineProperty(objeto,'cantidad'){
    value:1
    writable:true
    enumerable:true
    configurable:true
}
console.log(objeto)