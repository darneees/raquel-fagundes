"use strict";

// menu mobile
var open = document.getElementById('open__menu');
var close = document.getElementById('close__menu');
var modal = document.getElementById('menu__modal');
var links = document.querySelectorAll('.menu__link');
open.addEventListener('click', function () {
  modal.classList.add('show');
});
close.addEventListener('click', function () {
  modal.classList.remove('show');
});
links.forEach(function (link) {
  link.addEventListener('click', function () {
    modal.classList.remove('show');
  });
}); // menu dropdown

function dropdownOpen() {
  document.getElementById("menuDropdown").classList.toggle("show");
} // close menu dropdown when user click outside of it


window.onclick = function (event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDrown = dropdowns[i];

      if (openDrown.classList.contains('show')) {
        openDrown.classList.remove('show');
      }

      ;
    }

    ;
  }

  ;
}; // acocordion


document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}); // scroll to top

var myButton = document.getElementById("scrollTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "flex";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} // scroll reveal


ScrollReveal().reveal('.aboutMe__image', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 700,
  reset: true
});
ScrollReveal().reveal('.aboutMe__content', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 900,
  reset: true
});
ScrollReveal().reveal('#colage__container', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 800,
  reset: true
});
ScrollReveal().reveal('.why__title', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 700,
  reset: true
});
ScrollReveal().reveal('.why__text', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 900,
  reset: true
});
ScrollReveal().reveal('.areas__card', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 900,
  reset: true
});
ScrollReveal().reveal('.why__form', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 900,
  reset: true
});
ScrollReveal().reveal('.accordion', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 1000,
  reset: true
});
ScrollReveal().reveal('.contact__links', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 900,
  reset: true
});
ScrollReveal().reveal('.contact__copy', {
  delay: 400,
  distance: '50px',
  origin: 'left',
  duration: 900,
  reset: true
}); // toast animation

document.addEventListener("DOMContentLoaded", function () {
  var toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 4500);
}); // mask phone number

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
}); // reset form

function reset() {
  var form = document.getElementById('contactForm');
  form.reset();
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('value').value = '';
  document.getElementById('message').value = '';
} // API Formspree


document.getElementById('section-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var value = document.getElementById('value').value;
  var message = document.getElementById('message').value;
  var formData = {
    name: name,
    email: email,
    phone: phone,
    value: value,
    message: message
  };
  fetch('https://formspree.io/f/xqakzkrn', {
    // endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(function (response) {
    if (response.ok) {
      var successPopup = document.getElementById('success-popup');
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
  })["catch"](function (error) {
    console.error('Erro na solicitação:', error);
  });
}); //  event button - open

document.querySelectorAll('.nav__button').forEach(function (button) {
  button.addEventListener('click', function () {
    document.getElementById('section-form').style.display = 'flex';
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('body').style.overflow = 'hidden';
  });
}); // event button - close

document.getElementById('close-form').addEventListener('click', function () {
  document.getElementById('section-form').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('body').style.overflow = 'visible';
});