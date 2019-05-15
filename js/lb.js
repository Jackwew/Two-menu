let box = document.querySelector('.box');
let lis = box.querySelector('ul').children;
let ol = box.querySelector('ol');
let Prev = box.querySelector("#Prev");
let Next = box.querySelector("#Next");
let arr = [];
let index = 0;
let lastIndex = 0;
let timer = null;

//根据循环创建ol>li
for(let i = 0;i < lis.length;i++){
    let li = document.createElement("li");
    if(i === 0) li.classList.add('ac');
    arr.push(li);
    ol.appendChild(li);
}
for(let i = 0; i < arr.length; i ++){
    arr[i].onclick = function () {
        index = i;
        change();
        lastIndex = index;
    }
}
Next.onclick = function () {
    index ++;
    if(index === lis.length){
        index = 0;
    }
    change();
    lastIndex = index;
};
Prev.onclick = function () {
    index --;
    if(index < 0){
        index = lis.length - 1;
    }
    change();
    lastIndex = index;
};
clearInterval(timer);
timer = setInterval(function () {
    Next.onclick();
},2000);
// box.onmouseenter = function () {
//     clearInterval(timer);
// };
// box.onmouseleave = function () {
//     timer = setInterval(function () {
//         Next.onclick();
//     },2000);
// };
function change() {
    arr[lastIndex].classList.remove('ac');
    lis[lastIndex].classList.remove('ac');
    arr[index].classList.add('ac');
    lis[index].classList.add('ac');
}