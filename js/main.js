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

// bouton retour en haut

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Fait apparaître le bouton après 300px de scroll
  // d-none enleve le bootstarp qui cache le bouton
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("d-none");
  } else {
    backToTopBtn.classList.add("d-none");
  }
});

// Remonter en haut au clic
// scroll to permet de deplacer la page
// top to on lui donne les coordonnes de dest tout en haut de la page
// smooth 0 permet d aller en glissant au lieu de se teleporter
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" /* Remontée fluide */,
  });
});
// On sélectionne la navbar grâce à sa classe Bootstrap principale
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  // Si on a défilé de plus de 50 pixels vers le bas
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    // Si on remonte tout en haut, on retire les styles du scroll
    navbar.classList.remove("navbar-scrolled");
  }
});

// nav qui change au scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
