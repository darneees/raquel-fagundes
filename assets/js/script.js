// menu mobile
const open = document.getElementById('open__menu');
const close = document.getElementById('close__menu');
const modal = document.getElementById('menu__modal');
const links = document.querySelectorAll('.menu__link');

open.addEventListener('click', () => {
    modal.classList.add('show');
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});

// acocordion
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
});

// scroll to top
let myButton = document.getElementById("scrollTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "flex";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll reveal

ScrollReveal().reveal('.aboutMe__image', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.aboutMe__content', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.why__title', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.why__text', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.why__button', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.accordion', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1100,
    reset: true
});

ScrollReveal().reveal('.contact__links' ,{
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.contact__copy' ,{
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1000,
    reset: true
});