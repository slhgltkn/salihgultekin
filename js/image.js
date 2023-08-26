const leftSlide = document.querySelector('.slide-left');
const rightSlide = document.querySelector('.slide-right');

leftSlide.style.transform = 'translateX(0)';
rightSlide.style.transform = 'translateX(0)';

setTimeout(() => {
    leftSlide.classList.add('active');
    rightSlide.classList.add('active');
}, 1000); 
