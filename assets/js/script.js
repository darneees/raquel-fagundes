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

// menu dropdown
function dropdownOpen() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

// close menu dropdown when user click outside of it
window.onclick = function(event) {
    if(!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++) {
            var openDrown = dropdowns[i];
            if(openDrown.classList.contains('show')) {
                openDrown.classList.remove('show');
            };
        };
    };
};

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
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.aboutMe__content', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 900
});

ScrollReveal().reveal('#colage__container', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800
});

ScrollReveal().reveal('.why__title', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.why__text', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 900
});

ScrollReveal().reveal('.areas__card', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 900
});

ScrollReveal().reveal('.why__form', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 900
});

ScrollReveal().reveal('.accordion', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 1000
});

ScrollReveal().reveal('.contact__links' ,{
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 900
});

ScrollReveal().reveal('.contact__copy' ,{
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 900
});

// toast animation
document.addEventListener("DOMContentLoaded", function() {
    var toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 4500);
});

// mask phone number
document.getElementById('phone').addEventListener('input', function (e) {
    var telefone = e.target.value.replace(/\D/g, '');
    var telefoneFormatado = '';

    if (telefone.length > 0) {
        telefoneFormatado = '(' + telefone.substring(0, 2);
    }
    if (telefone.length >= 3) {
        telefoneFormatado += ') ' + telefone.substring(2, 7);
    }
    if (telefone.length >= 8) {
        telefoneFormatado += '-' + telefone.substring(7, 11);
    }
    e.target.value = telefoneFormatado;
});

// reset form
function reset() {
    const form = document.getElementById('contactForm');
    form.reset();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('value').value = '';
    document.getElementById('message').value = '';
}

// API Formspree
document.getElementById('section-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const value = document.getElementById('value').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        phone: phone,
        value: value,
        message: message
    };

    fetch('https://formspree.io/f/mrbgzgbj', { // endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(function (response) {
        if (response.ok) {
            const successPopup = document.getElementById('success-popup');

            successPopup.style.display = 'flex';
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('section-form').style.display = 'none';

            setTimeout(function () {
                successPopup.style.display = 'none';
                document.getElementById('overlay').style.display = 'none';
                document.getElementById('open-form').style.display = 'flex';
            }, 3000);

            reset();

        } else {
            console.error('Erro ao enviar o formulário');
        }
    })
    .catch(function (error) {
        console.error('Erro na solicitação:', error);
    });
});

//  event button - open
document.querySelectorAll('.nav__button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('section-form').style.display = 'flex';
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('body').style.overflow = 'hidden';
    });
});
// event button - close
document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('section-form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
});

document.addEventListener("DOMContentLoaded", function () {
    const sectionNames = {
        "home__container": "home",
        "aboutMe__container": "sobre-mim",
        "why__container": "por-que-fazer-terapia",
        "mission__cotainer": "missao",
        "when__container": "quando-procurar-ajuda",
        "areas__container": "areas-de-atuacao",
        "questions__container": "duvidas",
        "contact__container": "contato"
    };

    const anchorLinks = document.querySelectorAll("a[href^='#']");

    anchorLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                
                const newUrl = "/" + sectionNames[targetId];
                window.history.pushState(null, "", newUrl);
            }
        });
    });
});