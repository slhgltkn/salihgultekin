const circle = document.querySelector('.circlecursor');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - circle.clientWidth / 2;
    const y = e.clientY - circle.clientHeight / 2;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});
