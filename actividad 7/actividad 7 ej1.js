//ejercicio 1
function findWord(phrase, word){
    word = word.toLowerCase()
    if(phrase.indexOf(word) != -1){
        return true
    }else{
        return false
    }
}
var esta = findWord('Hola mundo', 'mundo')
console.log(esta)

