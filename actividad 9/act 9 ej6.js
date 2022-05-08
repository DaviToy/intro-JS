/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
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

    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
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
    student.pet="dog"
    console.log(student)