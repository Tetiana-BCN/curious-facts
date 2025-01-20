let favorites = [];

export function initializeFavorites() {
  const storedFavorites = localStorage.getItem("favorites");
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
    for (let fav of favorites) {
      addToFavoriteList(fav.message);
    }
  }
}

export function onAddToFavoritesClick(message) {
  const newFavorite = { id: Date.now(), message };
  favorites.push(newFavorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  const dialog = document.createElement("div");
  dialog.className = "custom-dialog";
  dialog.textContent = "Message added to favorites!";
  document.body.appendChild(dialog);

  setTimeout(() => {
    dialog.remove();
  }, 3000);

  addToFavoriteList(message);
}

export function addToFavoriteList(message) {
  const favoritesList = document.getElementById("favorites-list");
  const newFavoriteElement = document.createElement("li");
  newFavoriteElement.textContent = message;
  favoritesList.appendChild(newFavoriteElement);
}

export function displayFavorites() {
  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.style.display = "block";
}

export function hideFavorites() {
  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.style.display = "none";
}

export function resetFavorites() {
  localStorage.removeItem("favorites");
  favorites = [];
  const favoritesList = document.getElementById("favorites-list");
  if (favoritesList) {
    favoritesList.innerHTML = "";
  }
  hideFavorites();
}
