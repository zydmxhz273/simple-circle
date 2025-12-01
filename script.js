const circle = document.querySelector('.circle');
let count=0;
circle.addEventListener('click', ()=>{
    count++;
    circle.innerText=count;
});
