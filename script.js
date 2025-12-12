/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const dots = document.querySelectorAll('.dot');

    if (!slideContainer) return;

    let counter = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    // Actualiza la posición del carrusel y los puntos
    function updateCarousel() {
        slideContainer.style.transform = `translateX(${-counter * 100}%)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[counter]) {
            dots[counter].classList.add('active');
        }
    }

    // Avanzar
    function nextSlide() {
        counter++;
        if (counter >= totalSlides) {
            counter = 0;
        }
        updateCarousel();
    }

    // Listeners Botones
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = totalSlides - 1;
        }
        updateCarousel();
        resetTimer();
    });

    // Listeners Puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            counter = index;
            updateCarousel();
            resetTimer();
        });
    });

    // Auto-play (5 segundos)
    function startTimer() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(autoSlideInterval);
        startTimer();
    }

    startTimer();
});