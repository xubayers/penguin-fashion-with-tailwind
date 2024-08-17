const navs = document.querySelector('nav ul');
const closeNav = document.querySelector('#closeNav');
const mobileMenu = document.querySelector('#mobileMenu');

mobileMenu.addEventListener('click', function() {
    navs.setAttribute('id', 'navs')
})
closeBtn.addEventListener('click', function() {
    navs.removeAttribute('id', 'navs')
})