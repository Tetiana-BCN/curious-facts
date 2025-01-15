## Descripción
Esta versión mejorada de la aplicación "Curious Cats Facts" incluye funcionalidades adicionales, como la capacidad de agregar datos curiosos a una lista de favoritos, reproducir efectos de sonido, y utilizar animaciones y almacenamiento local para mejorar la experiencia del usuario.

---

## Características principales
 **Interfaz interactiva**:
   - Un botón que genera datos curiosos.
   - Botón para agregar datos curiosos a una lista de favoritos.
   - Botón de reinicio para ocultar los mensajes actuales.

 **Favoritos**:
   - Posibilidad de guardar datos curiosos en favoritos usando `localStorage`.
   - Botón dedicado para ver los favoritos almacenados.

 **Animaciones**:
   - Efectos de desvanecimiento (fade-in y fade-out) para mejorar la transición de los mensajes.

 **Efectos de sonido**:
   - Reproducción de un sonido al hacer clic en el botón de inicio.

 **Manejo de errores**:
   - Si la API falla, muestra un mensaje genérico de error.

---

## Tecnologías utilizadas

- **HTML5**: Estructura básica del proyecto.
- **CSS3**: Animaciones y estilizado.
- **JavaScript (ES6+)**: Lógica interactiva, manipulación del DOM y almacenamiento local.
- **API externa**: Se conecta a `https://uselessfacts.jsph.pl/` para obtener datos curiosos.

---

## Cómo funciona

### 1. Interacción principal
- Al cargar la página, el botón de inicio está preparado para escuchar eventos de clic.
- Cuando se hace clic en **Start🐈‍⬛👽**:
  1. Se reproduce un efecto de sonido.
  2. Se realiza una transición de desvanecimiento.
  3. Se borra el contenido anterior del contenedor de mensajes.
  4. Se llama a la API para obtener un nuevo dato curioso.
  5. El mensaje se muestra en pantalla con un efecto de desvanecimiento.

### 2. Agregar a favoritos
- Al hacer clic en el botón **Add to Favorites**:
  1. El dato curioso actual se guarda en un arreglo de favoritos.
  2. El arreglo se almacena en `localStorage` para que persista entre sesiones.

### 3. Ver favoritos
- El botón **View Favorites** redirige al usuario a otra página para explorar los datos curiosos guardados.

### 4. Reiniciar mensajes
- El botón **Reset** limpia el contenedor de mensajes y oculta la sección correspondiente.

---

## Cómo ejecutar el proyecto

1. Clona el repositorio o descarga los archivos.
2. Asegúrate de tener un entorno local configurado para servir archivos HTML para Visual Studio Code.
3. Abre el archivo `index.html` en un navegador web.
4. Haz clic en los botones interactivos para explorar las funcionalidades:
   - **Start**: Genera datos curiosos.
   - **Add to Favorites**: Guarda datos en favoritos.
   - **View Favorites**: Redirige a la página de favoritos.

---

## Archivos principales

- **`index.html`**: Estructura principal de la página.
- **`styles/welcome.css` y `styles/facts.css`**: Estilos de la interfaz y animaciones.
- **`src/js/apiService.js`**: Lógica para interactuar con la API externa.
- **`src/js/events.js`**: Manejo de eventos interactivos y almacenamiento local.

---

## Ejemplo de respuesta de la API
La API devuelve datos curiosos en formato JSON:
```json
{
    "id": "random_id",
    "text": "Cats sleep for 70% of their lives.",
    "source": "https://example.com",
    "language": "en",
    "permalink": "https://uselessfacts.jsph.pl/random_id"
}


