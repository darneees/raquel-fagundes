"use strict";

var open = document.getElementById("open__menu"),
    close = document.getElementById("close__menu"),
    modal = document.getElementById("menu__modal"),
    links = document.querySelectorAll(".menu__link");

function dropdownOpen() {
  document.getElementById("menuDropdown").classList.toggle("show");
}

open.addEventListener("click", function () {
  modal.classList.add("show");
}), close.addEventListener("click", function () {
  modal.classList.remove("show");
}), links.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.classList.remove("show");
  });
}), window.onclick = function (e) {
  if (!e.target.matches(".dropBtn")) {
    var t,
        n = document.getElementsByClassName("dropdown-content");

    for (t = 0; t < n.length; t++) {
      var l = n[t];
      l.classList.contains("show") && l.classList.remove("show");
    }
  }
}, document.addEventListener("DOMContentLoaded", function () {
  var e,
      t = document.getElementsByClassName("accordion");

  for (e = 0; e < t.length; e++) {
    t[e].addEventListener("click", function () {
      this.classList.toggle("active");
      var e = this.nextElementSibling;
      e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px";
    });
  }
});
var myButton = document.getElementById("scrollTop");

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? myButton.style.display = "flex" : myButton.style.display = "none";
}

function topFunction() {
  document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
}

function reset() {
  var e = document.getElementById("contactForm");
  e.reset(), document.getElementById("name").value = "", document.getElementById("email").value = "", document.getElementById("phone").value = "", document.getElementById("value").value = "", document.getElementById("message").value = "";
}

window.onscroll = function () {
  scrollFunction();
}, ScrollReveal().reveal(".aboutMe__image", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 700
}), ScrollReveal().reveal(".aboutMe__content", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 900
}), ScrollReveal().reveal("#colage__container", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 800
}), ScrollReveal().reveal(".why__title", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 700
}), ScrollReveal().reveal(".why__text", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 900
}), ScrollReveal().reveal(".areas__card", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 900
}), ScrollReveal().reveal(".why__form", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 900
}), ScrollReveal().reveal(".accordion", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 1e3
}), ScrollReveal().reveal(".contact__links", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 900
}), ScrollReveal().reveal(".contact__copy", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 900
}), document.addEventListener("DOMContentLoaded", function () {
  var e = document.getElementById("toast");
  e.classList.add("show"), setTimeout(function () {
    e.classList.remove("show");
  }, 4500);
}), document.getElementById("phone").addEventListener("input", function (e) {
  var t = e.target.value.replace(/\D/g, ""),
      n = "";
  t.length > 0 && (n = "(" + t.substring(0, 2)), t.length >= 3 && (n += ") " + t.substring(2, 7)), t.length >= 8 && (n += "-" + t.substring(7, 11)), e.target.value = n;
}), document.getElementById("section-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var t = document.getElementById("name").value,
      n = document.getElementById("email").value,
      l = document.getElementById("phone").value,
      o = document.getElementById("value").value,
      a = document.getElementById("message").value;
  fetch("https://formspree.io/f/mrbgzgbj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: t,
      email: n,
      phone: l,
      value: o,
      message: a
    })
  }).then(function (e) {
    if (e.ok) {
      var _t = document.getElementById("success-popup");

      _t.style.display = "flex", document.getElementById("overlay").style.display = "flex", document.getElementById("section-form").style.display = "none", setTimeout(function () {
        _t.style.display = "none", document.getElementById("overlay").style.display = "none", document.getElementById("open-form").style.display = "flex";
      }, 3e3), reset();
    } else console.error("Erro ao enviar o formul\xe1rio");
  })["catch"](function (e) {
    console.error("Erro na solicita\xe7\xe3o:", e);
  });
}), document.querySelectorAll(".nav__button").forEach(function (e) {
  e.addEventListener("click", function () {
    document.getElementById("section-form").style.display = "flex", document.getElementById("overlay").style.display = "flex", document.getElementById("body").style.overflow = "hidden";
  });
}), document.getElementById("close-form").addEventListener("click", function () {
  document.getElementById("section-form").style.display = "none", document.getElementById("overlay").style.display = "none", document.getElementById("body").style.overflow = "visible";
}), document.addEventListener("DOMContentLoaded", function () {
  var e = {
    home__container: "home",
    aboutMe__container: "sobre-mim",
    why__container: "por-que-fazer-terapia",
    mission__cotainer: "missao",
    when__container: "quando-procurar-ajuda",
    areas__container: "areas-de-atuacao",
    questions__container: "duvidas",
    contact__container: "contato"
  },
      t = document.querySelectorAll("a[href^='#']");
  t.forEach(function (t) {
    t.addEventListener("click", function (t) {
      t.preventDefault();
      var n = this.getAttribute("href").substring(1),
          l = document.getElementById(n);

      if (l) {
        l.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        var o = "/" + e[n];
        window.history.pushState(null, "", o);
      }
    });
  });
});