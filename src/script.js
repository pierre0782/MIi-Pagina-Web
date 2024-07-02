window.onload = function() {
    const prevButton = document.querySelector('.homepage-prev');
    const nextButton = document.querySelector('.homepage-next');
    const slider = document.querySelector('.homepage-testimonial-slider');

    if (prevButton && nextButton && slider) {
        prevButton.addEventListener('click', () => {
            slider.scrollBy({
                left: -220, // Adjust this value as needed
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', () => {
            slider.scrollBy({
                left: 220, // Adjust this value as needed
                behavior: 'smooth'
            });
        });
    } else {
        console.error('No se encontraron los elementos prevButton, nextButton o slider.');
    }
};
