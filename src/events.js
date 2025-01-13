let favorites = [];

document.addEventListener('DOMContentLoaded', (_event) => {
  const startButton = document.getElementById('start-button');
  const viewFavoritesButton = document.getElementById('viewFavorites');
  const messageContainer = document.getElementById('message-container');
  const buttonSound = document.getElementById("button-sound");


  startButton.addEventListener('click', async () => {
    buttonSound.play();
    console.log('El botón ha sido clickeado');
    
    // Hacer fade out
    messageContainer.classList.add('fade-out');
    
    // Esperar un poco para que termine la animación
    await new Promise(resolve => setTimeout(resolve, 500));

    // Limpiar el contenido existente
    messageContainer.innerHTML = '';

    // Crear un nuevo div para el mensaje
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message-div';
    messageContainer.appendChild(messageDiv);

    // Crear un nuevo botón para agregar a favoritos
    const addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.textContent = '⭐ Add to Favorites';
    addToFavoritesButton.className = 'addToFavorites';
    messageContainer.appendChild(addToFavoritesButton);

    //Crear un nuevo botón para resetear
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.className = 'resetButton';
    resetButton.addEventListener('click', () => {
        messageDiv.textContent = '';
        hideMessage();
    }
    );
    messageContainer.appendChild(resetButton);

    // Mostrar el contenedor de mensajes si estaba oculto
    if (messageContainer.style.display === 'none') {
      messageContainer.style.display = 'flex';
    }

    // Obtener y mostrar el nuevo mensaje
    const message = await fetchMessageFromAPI();
    messageDiv.textContent = message;

    // Hacer fade in
    messageContainer.classList.remove('fade-out');
    messageContainer.classList.add('fade-in');

    // Agregar evento click al botón de favoritos
    addToFavoritesButton.addEventListener('click', () => {
      const messageText = messageDiv.textContent.trim();
      if (messageText) {
        const newFavorite = { id: Date.now(), message: messageText };
        favorites.push(newFavorite);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Mensaje añadido a favoritos!');
      }
    });
  });

  viewFavoritesButton.addEventListener('click', () => {
    window.location.href = '/favorites.html'; // Asumiendo que tienes una página llamada favorites.html
  });

  // Cargar favoritos almacenados
  const storedFavorites = localStorage.getItem('favorites');
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
  }

  // Ocultar el contenedor de mensajes al cargar la página
  function hideMessage() {
    messageContainer.style.display = 'none';
  }

  window.onload = hideMessage;
});

async function fetchMessageFromAPI() {
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const data = await response.json();
    return data.text; 
  } catch (error) {
    console.error('Error al obtener el mensaje de la API:', error);
    return 'Error al obtener el mensaje';
  }
}
