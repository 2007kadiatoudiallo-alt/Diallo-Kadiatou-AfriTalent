
// COMMIT 7 - JS : compteurs animés au scroll et fade-in sections


//  1. FADE-IN DES SECTIONS AU SCROLL 
const sectionsFadeIn = document.querySelectorAll('.fade-in-section');

const observateurFadeIn = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sectionsFadeIn.forEach(function(section) {
  observateurFadeIn.observe(section);
});


// --- 2. COMPTEURS ANIMÉS AU SCROLL ---
const compteurs = document.querySelectorAll('.compteur');

const observateurCompteur = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const cible = parseInt(entry.target.getAttribute('data-cible'));
      let valeurActuelle = 0;
      const duree = 2000; // durée en ms
      const increment = Math.ceil(cible / (duree / 20));

      const intervalle = setInterval(function() {
        valeurActuelle += increment;
        if (valeurActuelle >= cible) {
          entry.target.textContent = cible;
          clearInterval(intervalle);
        } else {
          entry.target.textContent = valeurActuelle;
        }
      }, 20);

      observateurCompteur.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

compteurs.forEach(function(compteur) {
  observateurCompteur.observe(compteur);
});


// --- 3. NAVBAR : changement de style au scroll ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


// --- 4. BOUTON RETOUR EN HAUT ---
const boutonHaut = document.getElementById('backToTop');

if (boutonHaut) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      boutonHaut.style.display = 'block';
    } else {
      boutonHaut.style.display = 'none';
    }
  });

  boutonHaut.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// --- 5. DARK / LIGHT MODE ---
const boutonTheme = document.getElementById('theme-toggle');

if (boutonTheme) {
  const themeSauvegarde = localStorage.getItem('theme');
  if (themeSauvegarde === 'dark') {
    document.body.classList.add('dark-mode');
    boutonTheme.textContent = '☀️';
  }

  boutonTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      boutonTheme.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      boutonTheme.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}



const liensFiltre = document.querySelectorAll('[data-filtre]');
const cardsFreelance = document.querySelectorAll('[data-categorie]');

liensFiltre.forEach(function(lien) {
  lien.addEventListener('click', function(e) {
    e.preventDefault();

    // Retirer la classe active de tous les liens
    liensFiltre.forEach(function(l) {
      l.classList.remove('active');
    });

    // Ajouter active sur le lien cliqué
    lien.classList.add('active');

    const filtre = lien.getAttribute('data-filtre');

    // Afficher ou masquer les cards selon la catégorie
    cardsFreelance.forEach(function(card) {
      const categorie = card.getAttribute('data-categorie');

      if (filtre === 'tout' || categorie === filtre) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

var formulaire = document.getElementById("formulaire-contact");

if (formulaire) {
  formulaire.addEventListener("submit", function(e) {
    e.preventDefault();

    var nom = document.getElementById("nom").value.trim();
    var email = document.getElementById("email").value.trim();
    var sujet = document.getElementById("sujet").value.trim();
    var message = document.getElementById("message").value.trim();
    var valide = true;

    if (nom === "") {
      document.getElementById("erreur-nom").textContent = "Le nom est obligatoire";
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
      document.getElementById("erreur-sujet").textContent = "Le sujet est obligatoire";
      valide = false;
    } else {
      document.getElementById("erreur-sujet").textContent = "";
    }

    if (message.length < 20) {
      document.getElementById("erreur-message").textContent = "Le message doit avoir au moins 20 caractères";
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
