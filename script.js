document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.produto-lista');
    const items = document.querySelectorAll('.produto-item');
    let currentIndex = 0;

    
    function showSlide(index) {
        const itemWidth = items[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    
    showSlide(currentIndex);

    
    setInterval(nextSlide, 3000);
});
