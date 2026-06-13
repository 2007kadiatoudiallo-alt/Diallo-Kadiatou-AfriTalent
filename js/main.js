// dark mode
const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  }
});

// navbar au scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// retour en hqaut
const btnTop = document.getElementById("btn-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// commit   7 le cpt et le fade in
document.addEventListener("DOMContentLoaded", function () {
  // -- COMPTEURS --
  var compteurs = document.querySelectorAll(".compteur");

  compteurs.forEach(function (compteur) {
    var dejaLance = false;

    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting && !dejaLance) {
          dejaLance = true;
          var cible = parseInt(compteur.getAttribute("data-cible"));
          var actuel = 0;
          var increment = Math.ceil(cible / 100);

          var timer = setInterval(function () {
            actuel += increment;
            if (actuel >= cible) {
              actuel = cible;
              clearInterval(timer);
            }
            compteur.textContent = actuel;
          }, 20);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(compteur);
  });

  // fade in
  var sections = document.querySelectorAll(".fade-in-section");

  var fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach(function (s) {
    fadeObserver.observe(s);
  });
});
