const navs = document.querySelector('nav ul');
const i = document.querySelector('nav ul i');
const li = document.querySelector('nav ul li');

const closeNav = document.querySelector('#closeNav');
const mobileMenu = document.querySelector('#mobileMenu');
const Loader = document.querySelector('#loader');
window.onload = function() {
    Loader.style.display = 'none';
    document.querySelector('#hasLoad').setAttribute('href', './loaded.css')
}

mobileMenu.addEventListener('click', function() {
    navs.setAttribute('id', 'navs')
})




closeBtn.addEventListener('click', function() {    
    navs.removeAttribute('id', 'navs')
})