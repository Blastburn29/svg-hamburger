const ham = document.querySelector('.hamburger');
const line1 = document.querySelector('#big');
const line2 = document.querySelector('#middle');
const line3 = document.querySelector('#small');


ham.addEventListener('click',()=>{
    line1.classList.toggle('open');
    line2.classList.toggle('open');
    line3.classList.toggle('open');

})