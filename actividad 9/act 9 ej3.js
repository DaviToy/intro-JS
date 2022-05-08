/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(Object.hasOwn(student, "name"))
    student[name]
    console.log(student.hasOwnProperty("name"))
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(Object.hasOwn(student, "name"))
student[name]
console.log(student.hasOwnProperty("name"))