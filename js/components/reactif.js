// Sélectionner les éléments du header, des sections
const header = document.querySelector('header');
const sections = document.querySelectorAll('.section');
// Récupérer tous les éléments h1 dans le document
var h1Elements = document.getElementsByTagName("h1");

// Fonction pour gérer les modifications de style en fonction de la taille d'écran
function handleResize() {
  // Récupérer la largeur de la fenêtre
  const windowWidth = window.innerWidth;

  // Si la largeur de la fenêtre est inférieure à 768 pixels, ajouter la classe 'small' aux sections, sinon la supprimer
  if (windowWidth < 768) {
  	for (var i = 0; i < sections.length; i++) {
  		sections[i].classList.add('small');
		}
  } else {
  	for (var i = 0; i < sections.length; i++) {
  		sections[i].classList.remove('small');
		}
  }

  // Si la largeur de la fenêtre est inférieure à 1024 pixels, ajouter la classe 'small' au header, sinon la supprimer
  if (windowWidth < 1024) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }

  // Si la largeur de la fenêtre est inférieure à 1280 pixels, modifier la taille des H1, sinon la remettre à l'origine
  if (windowWidth < 1280) {
  	// Parcourir la liste des éléments h1 et modifier leur taille de police
		for (var i = 0; i < h1Elements.length; i++) {
  		h1Elements[i].style.fontSize = "30px"; // Remplacez la valeur "24px" par la taille de police souhaitée
		}
  } else {
  	// Parcourir la liste des éléments h1 et modifier leur taille de police
		for (var i = 0; i < h1Elements.length; i++) {
  		h1Elements[i].style.fontSize = "60px"; // Remplacez la valeur "40px" par la taille de police souhaitée
		}
  }
}

// Appeler la fonction handleResize pour la première fois pour initialiser les styles en fonction de la taille d'écran actuelle
handleResize();

// Ajouter un écouteur d'événement pour l'événement de redimensionnement de fenêtre
window.addEventListener('resize', handleResize);