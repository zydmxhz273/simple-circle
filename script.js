const circle = document.querySelector('.circle');
let count=parseInt(localStorage.getItem('myScore'))||0;
circle.innerText=count;
circle.addEventListener('click', ()=>{
    count++;
    circle.innerText=count;
    localStorage.setItem('myScore', count);
});
