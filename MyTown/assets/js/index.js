const slidermain = new Swiper('.slider_main', { // Main slider create + settings
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

const sliderphoto = new Swiper('.slider_photo', { // Slider for blur
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})

slidermain.controller.control = sliderphoto; // Controller for target if open or closed

const item = document.querySelectorAll('.slider__item'); // Function , opened or closed img per click
item.forEach(i => {
    i.addEventListener('click', event => {
        i.classList.toggle('opened');
    })
})

let about = document.querySelector('.about__town'); // Get class .about

slidermain.on('slideChange', event => { // Function for checking and target settings    
    if (slidermain.activeIndex > 0) {
        about.classList.add('hidder'); // The target checks whether the index is greater than 0 and if so, the text is hidden.
    }
    else {
        about.classList.remove('hidder');
    }
})