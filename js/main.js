// dark mode
// Dark/Light Mode
const toggleBtn = document.getElementById("theme-toggle");

// Appliquer le thème sauvegardé au chargement
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark-mode" ? "☀️" : "🌙";
}

// Au clic sur le bouton
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark-mode" : "");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
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

// commit8 filtrage
var filtres = document.querySelectorAll("[data-filtre]");

filtres.forEach(function (filtre) {
  filtre.addEventListener("click", function (e) {
    e.preventDefault();
    var categorie = this.getAttribute("data-filtre");
    var cartes = document.querySelectorAll("[data-categorie]");

    cartes.forEach(function (carte) {
      if (
        categorie === "tout" ||
        carte.getAttribute("data-categorie") === categorie
      ) {
        carte.style.display = "block";
      } else {
        carte.style.display = "none";
      }
    });
  });
});

// formulaire

var formulaire = document.getElementById("formulaire-contact");

if (formulaire) {
  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    var nom = document.getElementById("nom").value.trim();
    var email = document.getElementById("email").value.trim();
    var sujet = document.getElementById("sujet").value.trim();
    var message = document.getElementById("message").value.trim();
    var valide = true;

    if (nom === "") {
      document.getElementById("erreur-nom").textContent =
        "Le nom est obligatoire";
      valide = false;
    } else {
      document.getElementById("erreur-nom").textContent = "";
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      document.getElementById("erreur-email").textContent = "Email invalide";
      valide = false;
    } else {
      document.getElementById("erreur-email").textContent = "";
    }

    if (sujet === "") {
      document.getElementById("erreur-sujet").textContent =
        "Le sujet est obligatoire";
      valide = false;
    } else {
      document.getElementById("erreur-sujet").textContent = "";
    }

    if (message.length < 20) {
      document.getElementById("erreur-message").textContent =
        "Le message doit avoir au moins 20 caractères";
      valide = false;
    } else {
      document.getElementById("erreur-message").textContent = "";
    }

    if (valide) {
      document.getElementById("message-succes").classList.remove("d-none");
      formulaire.reset();
    }
  });
}
