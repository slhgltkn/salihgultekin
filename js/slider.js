document.addEventListener("DOMContentLoaded", function () {
    let sliderContainer = document.querySelector('.slider-container');
    let slides = document.querySelectorAll('.exper-container');

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        let offset = currentIndex * -100;
        sliderContainer.style.transform = `translateY(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    document.querySelector('.slider-left').addEventListener('click', function (event) {
        event.preventDefault(); // Butonun varsayılan davranışını engelle
        prevSlide();
    });

    document.querySelector('.slider-right').addEventListener('click', function (event) {
        event.preventDefault(); // Butonun varsayılan davranışını engelle
        nextSlide();
    });

    setInterval(nextSlide, 3000); // Otomatik geçiş süresi (ms)
});
