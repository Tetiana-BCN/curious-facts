# Curious Cats Facts - Extended Version

## Description
This enhanced version of the "Curious Cats Facts" application includes additional features such as the ability to add fun facts to a favorites list, play sound effects, and use animations and local storage to enhance the user experience.

---

## Key Features

**Interactive Interface**:
- A button that generates fun facts.
- Button to add fun facts to a favorites list.
- Reset button to hide the current messages.

**Favorites**:
- Ability to save fun facts to favorites using `localStorage`.
- Dedicated button to view stored favorites.

**Animations**:
- Fade-in and fade-out effects to improve message transitions.

**Sound Effects**:
- Plays a sound when clicking the start button.

**Error Handling**:
- Displays a generic error message if the API fails.

---

## Technologies Used

- **HTML5**: Basic structure of the project.
- **CSS3**: Animations and styling.
- **JavaScript (ES6+)**: Interactive logic, DOM manipulation, and local storage.
- **External API**: Connects to `https://uselessfacts.jsph.pl/` to fetch fun facts.

---

## How It Works

### 1. Main Interaction
- When the page loads, the start button is ready to listen for click events.
- When clicking **Start🐈‍⬛👽**:
  1. A sound effect is played.
  2. A fade-in transition occurs.
  3. The previous content in the message container is cleared.
  4. The API is called to fetch a new fun fact.
  5. The message is displayed on the screen with a fade-in effect.

### 2. Add to Favorites
- When clicking the **Add to Favorites** button:
  1. The current fun fact is saved to a favorites array.
  2. The array is stored in `localStorage` to persist between sessions.

### 3. View Favorites
- The **View Favorites** button redirects the user to another page to explore the saved fun facts.

### 4. Reset Messages
- The **Reset** button clears the message container and hides the corresponding section.

---

## How to Run the Project

1. Clone the repository or download the files.
2. Make sure you have a local environment set up to serve HTML files, such as Visual Studio Code with Live Server.
3. Open the `index.html` file in a web browser.
4. Click the interactive buttons to explore the features:
   - **Start**: Generates fun facts.
   - **Add to Favorites**: Saves facts to favorites.
   - **View Favorites**: Redirects to the favorites page.

---

## Main Files

- **`index.html`**: Main structure of the page.
- **`styles/welcome.css` and `styles/facts.css`**: Interface and animation styles.
- **`src/js/apiService.js`**: Logic for interacting with the external API.
- **`src/js/events.js`**: Event handling and local storage management.

---

## Example API Response
The API returns fun facts in JSON format:
```json
{
    "id": "random_id",
    "text": "Cats sleep for 70% of their lives.",
    "source": "https://example.com",
    "language": "en",
    "permalink": "https://uselessfacts.jsph.pl/random_id"
}
