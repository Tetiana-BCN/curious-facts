import { fetchMessageFromAPI } from "./apiService.js";
import {
  initializeFavorites,
  onAddToFavoritesClick,
  displayFavorites,
  resetFavorites,
} from "./favorites.js";

document.addEventListener("DOMContentLoaded", onPageLoaded);

function onPageLoaded() {
  const startButton = document.getElementById("start-button");
  const messageContainer = document.getElementById("message-container");
  const buttonSound = document.getElementById("button-sound");
  const favoritesContainer = document.getElementById("favorites-container");

  const resetButton = document.createElement("button");
  resetButton.className = "resetButton";
  resetButton.innerHTML = `<img src="/assets/reset.png" alt="Reset" class="reset-icon"> Reset`;
  resetButton.addEventListener("click", () => {
    resetFavorites();
    messageContainer.innerHTML = "";
    messageContainer.style.display = "none";
  });

  initializeFavorites();
  favoritesContainer.style.display = "none";
  messageContainer.style.display = "none";
  startButton.addEventListener("click", async () => {
    buttonSound.play();

    messageContainer.classList.add("fade-out");
    await new Promise((resolve) => setTimeout(resolve, 500));
    messageContainer.innerHTML = "";

    const messageDiv = document.createElement("div");
    messageDiv.id = "message-div";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "buttons-div";

    const addToFavoritesButton = document.createElement("button");
    addToFavoritesButton.textContent = "⭐ Add to Favorites";
    addToFavoritesButton.className = "addToFavorites";

    const viewFavoritesButton = document.createElement("button");
    viewFavoritesButton.textContent = "⭐ View Favorites";
    viewFavoritesButton.className = "viewFavorites";

    const resetButton = document.createElement("button");
    resetButton.className = "resetButton";
    resetButton.innerHTML = `<img src="/assets/reset.png" alt="Reset" class="reset-icon"> Reset`;

    viewFavoritesButton.addEventListener("click", displayFavorites);
    addToFavoritesButton.addEventListener("click", async () => {
      const message = messageDiv.textContent;
      onAddToFavoritesClick(message);
    });
    resetButton.addEventListener("click", () => {
      resetFavorites();
      messageContainer.innerHTML = "";
      messageContainer.style.display = "none";
    });

    buttonsDiv.appendChild(addToFavoritesButton);
    buttonsDiv.appendChild(viewFavoritesButton);
    buttonsDiv.appendChild(resetButton);

    messageContainer.appendChild(messageDiv);
    messageContainer.appendChild(buttonsDiv);

    const message = await fetchMessageFromAPI();
    messageDiv.textContent = message;

    messageContainer.classList.remove("fade-out");
    messageContainer.classList.add("fade-in");
    messageContainer.style.display = "flex";
  });
}
