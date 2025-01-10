document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', async () => {
        console.log('El botón ha sido clickeado');
        
        const messageContainer = document.getElementById('message-container');
    
        let messageDiv = document.getElementById('message-div');
        if (!messageDiv) {
          
            messageDiv = document.createElement('div');
            messageDiv.id = 'message-div';
            messageContainer.appendChild(messageDiv);
        }
     
        const message = await fetchMessageFromAPI();
        
        messageDiv.textContent = message;
    });
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