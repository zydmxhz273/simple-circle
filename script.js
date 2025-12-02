/*球*/
const circle = document.querySelector('.circle');
let count=parseInt(localStorage.getItem('myScore'))||0;
circle.innerText=count;
circle.addEventListener('click', ()=>{
    count++;
    circle.innerText=count;
    localStorage.setItem('myScore', count);
});

/*重置*/
const resetBtn=document.querySelector('.reset-btn');
resetBtn.addEventListener('click', (e)=>{
    e.stopPropagation(); //阻止事件冒泡，防止触发circle的点击事件(这里不关键)
    count=0;
    circle.innerText=count;
    localStorage.setItem('myScore', count);
});
