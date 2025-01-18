let favorites = [];


document.removeEventListener('DOMContentLoaded', onPageLoaded);

document.addEventListener('DOMContentLoaded', onPageLoaded);

function onPageLoaded() {
  const startButton = document.getElementById('start-button');
  const messageContainer = document.getElementById('message-container');
  const buttonSound = document.getElementById("button-sound");
  const favoritesContainer = document.getElementById('favorites-container');  
  const closeFavoritesButton = document.getElementById('closeFavorites');

  const storedFavorites = localStorage.getItem('favorites');
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
    for (let fav of favorites) {
      addToFavoriteList(fav.message);
    }
  }
  favoritesContainer.style.display = 'none';

  startButton.addEventListener('click', async () => {
    buttonSound.play();
    
    
    messageContainer.classList.add('fade-out');
    await new Promise(resolve => setTimeout(resolve, 500));
    messageContainer.innerHTML = '';
  
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message-div';
    messageContainer.appendChild(messageDiv);
    const hideMessageDiv = function(messageDiv){
      messageDiv.style.display= "none";
    }
  
    const addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.textContent = '⭐ Add to Favorites';
    addToFavoritesButton.className = 'addToFavorites';
     messageContainer.appendChild(addToFavoritesButton);
  
    const viewFavoritesButton = document.createElement('button');
    viewFavoritesButton.textContent = '⭐ View Favorites';
    viewFavoritesButton.className = 'viewFavorites';
    messageContainer.appendChild(viewFavoritesButton);

     const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.className = 'resetButton';
    resetButton.addEventListener('click', () => {
        messageDiv.textContent = '';
        hideMessage();
        hideFavorites();
        localStorage.removeItem('favorites');
        favorites = [];
        const favoritesList = document.getElementById('favorites-list');
        if (favoritesList) {
          favoritesList.innerHTML = '';
        }

        favoritesContainer.style.display = 'none';
    }

    
    );
    messageContainer.appendChild(resetButton);
  
    if (messageContainer.style.display === 'none') {
      messageContainer.style.display = 'flex';
    }
  
    const message = await fetchMessageFromAPI();
    messageDiv.textContent = message;
    messageDiv.style.fontSize = '3em';
    viewFavoritesButton.addEventListener('click', () => {
      favoritesContainer.style.display = 'block';
      favoritesContainer.style.fontSize = "2em";
      messageDiv.textContent = '';
            messageDiv.style.display = "none";
            displayFavorites();
    })  
    messageContainer.classList.remove('fade-out');
    messageContainer.classList.add('fade-in');
  
    addToFavoritesButton.addEventListener('click', onAddToFavoritesClick);
    //viewFavoritesButton.addEventListener('click', onViewFavoritesClick);
  });
  
  function hideMessage() {
    messageContainer.style.display = 'none';
  }
  
  window.onload = hideMessage;
}


function onAddToFavoritesClick() {
  const messageDiv = document.getElementById('message-div');
  const messageText = messageDiv.textContent.trim();
  if (messageText) {
    const newFavorite = { id: Date.now(), message: messageText };
    favorites.push(newFavorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    const dialog = document.createElement("div");
    dialog.className = "custom-dialog";
    
    dialog.textContent = "Message added to favorites!";
    dialog.style.fontSize = "2rem";
    document.body.appendChild(dialog);
    

    
    

    setTimeout(() => {
      dialog.remove();
    }, 3000);

    addToFavoriteList(messageText);
    
  }
}

function onViewFavoritesClick() {
  showFavorites();
}

function showFavorites() {
  const favoritesContainer = document.getElementById('favorites-container');
  favoritesContainer.style.display = 'block';
  messageDiv.style.display = "none";
}

function hideFavorites() {
  const favoritesContainer = document.getElementById('favorites-container');
  favoritesContainer.style.display = 'none';
}

function addToFavoriteList(message) {
  const favoritesList = document.getElementById('favorites-list');
  const newFavoriteElement = document.createElement('li');
  newFavoriteElement.textContent = message;
  favoritesList.appendChild(newFavoriteElement);
}



async function fetchMessageFromAPI() {
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const data = await response.json();
    return data.text; 
  } catch (error) {
    console.error('Error al obtener el mensaje de la API:', error);
    return 'Failed to get a message';
  }
}

