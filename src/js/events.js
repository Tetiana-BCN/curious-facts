import { fetchMessageFromAPI } from "./apiService.js";
import { initializeFavorites, onAddToFavoritesClick, displayFavorites, resetFavorites } from "./favorites.js";

document.addEventListener("DOMContentLoaded", onPageLoaded);

function onPageLoaded() {
  const startButton = document.getElementById("start-button");
  const messageContainer = document.getElementById("message-container");
  const buttonSound = document.getElementById("button-sound");
  const favoritesContainer = document.getElementById("favorites-container");

  initializeFavorites();
  favoritesContainer.style.display = "none";

  startButton.addEventListener("click", async () => {
    buttonSound.play();

    messageContainer.classList.add("fade-out");
    await new Promise((resolve) => setTimeout(resolve, 500));
    messageContainer.innerHTML = "";

    const messageDiv = document.createElement("div");
    messageDiv.id = "message-div";
    messageContainer.appendChild(messageDiv);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "buttons-div";
    messageContainer.appendChild(buttonsDiv);

    const addToFavoritesButton = document.createElement("button");
    addToFavoritesButton.textContent = "⭐ Add to Favorites";
    addToFavoritesButton.className = "addToFavorites";
    messageContainer.appendChild(addToFavoritesButton);

    const viewFavoritesButton = document.createElement("button");
    viewFavoritesButton.textContent = "⭐ View Favorites";
    viewFavoritesButton.className = "viewFavorites";
    messageContainer.appendChild(viewFavoritesButton);

    const resetButton = document.createElement("button");
    resetButton.className = "resetButton";

    const resetIcon = document.createElement("img");
    resetIcon.src = "/assets/reset.png";
    resetIcon.alt = "Reset";
    resetIcon.className = "reset-icon";

    resetButton.appendChild(resetIcon);
    resetButton.appendChild(document.createTextNode(" Reset"));
    resetButton.addEventListener("click", resetFavorites);
    messageContainer.appendChild(resetButton);

    if (messageContainer.style.display === "none") {
      messageContainer.style.display = "flex";
    }

    const message = await fetchMessageFromAPI();
    messageDiv.textContent = message;

    viewFavoritesButton.addEventListener("click", displayFavorites);
    addToFavoritesButton.addEventListener("click", () => onAddToFavoritesClick(message));

    messageContainer.classList.remove("fade-out");
    messageContainer.classList.add("fade-in");
  });

  function hideMessage() {
    messageContainer.style.display = "none";
  }

  window.onload = hideMessage;
}
