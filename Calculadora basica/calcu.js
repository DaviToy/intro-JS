let value = document.getElementById('si')

DEL.onclick=function(){
    let array=input.split("")
    input=""
    array.pop()
    array.array.forEach(element => {
        input=input+element
    });
    op.textContent=input
}
