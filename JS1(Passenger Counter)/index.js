let B=document.getElementById("b")
console.log(B)
let C=document.getElementById("c")
console.log(C)
let count=0
function add()
{
    count = count +1;
    B.textContent=count
}
function save()
{
    let str=count+" - "
    C.textContent+=str;
    B.textContent=0
    count=0
}