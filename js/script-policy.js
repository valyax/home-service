// navigation
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation__list');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    navigation.classList.toggle('navigation__list--active');
});