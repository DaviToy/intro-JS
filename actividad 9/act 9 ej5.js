/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    Object.defineProperty(student, 'pet'){
        enumerable: true
        value: 'cat'
    }
    console.log(student)

La nueva edad debe ser 35.
 */ 
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
Object.defineProperty(student, 'pet'){
    enumerable: true
    value: 'cat'
}
console.log(student)
array = []
for(var num in student){
    array.push(num)
}
student[array[1]]=35
console.log(student)