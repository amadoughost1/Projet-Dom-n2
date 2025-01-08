// Fonction pour générer une couleur hexadécimale aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Attendre que le DOM soit complètement chargé avant d'ajouter des événements
  document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments
    const colorBox = document.getElementById('color-box');
    const changeColorButton = document.getElementById('change-color-btn');
  
    // Ajouter un écouteur d'événements pour le bouton
    changeColorButton.addEventListener('click', function() {
      // Générer une couleur aléatoire et changer la couleur de fond de la boîte
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
    });
  });
  