// navigation
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation__list');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    navigation.classList.toggle('navigation__list--active');
});

// swiper
const swiper = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        992: {
            slidesPerView: 2
        }
    }
});

// modal
const modal = document.querySelector('.modal');
const triggers = document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
    trigger.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.add('modal--active');
    });
});

modal.querySelector('.modal__close').addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('modal--active');
    }
});