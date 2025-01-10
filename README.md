# curious-facts
Web Application Curious Facts

Our Web Application allows you to check Curious facts about anything in English and German and then keep and mark them,  if you like it, as favourate.

Why this project is important: It entertains the client.

How to use it: Check on the interesting facts and then Click on the ones you like to save them as your favourate.

Area of usage: For school and other educational purposes, language courses and news projects.


License 
No license required.

Planificación del Proyecto: Curious Facts

1. División de Fases del Proyecto

***Fase 1: Inicio y Planificación

Duración: 1 día

Tareas:

Definir el alcance detallado del proyecto y establecer metas claras.

Crear tablero en Trello con las columnas: Backlog, En progreso, Revisión, Hecho.

Dividir las historias de usuario según los requisitos funcionales.

Asignar roles (Scrum Master y Product Owner).

Configurar repositorio en GitHub con ramas main y dev según el flujo de trabajo GitFlow.


***Fase 2: Diseño y Maquetación (UI/UX)

Duración: 4 días (Sprint 1)

Tareas:

Diseñar la interfaz siguiendo Atomic Design.

Crear wireframes y prototipos en Figma.

Planificar estructura de carpetas y nomenclatura.

Implementar HTML básico (estructura inicial de la SPA).


***Fase 3: Desarrollo Front-End

Duración: 6 días (Sprint 1 y Sprint 2)

Tareas:

Implementar el responsive design con CSS (mobile first).

Crear componentes reutilizables siguiendo Atomic Design.

Implementar interacciones del usuario con JavaScript (DOM y Event Handlers).

Configurar llamadas a la API usando Fetch.

Fase 4: Funcionalidades Avanzadas y Optimizaciones

Duración: 3 días (Sprint 2)

Tareas:

Implementar funcionalidad para guardar favoritos.

Agregar animaciones y transiciones.

Validar estructura coherente.


***Fase 5: Pruebas y Presentación

Duración: 2 días

Tareas:

Realizar pruebas unitarias y de integración (opcional).

Preparar demo funcional y documentación en el README.

Realizar la presentación final del proyecto.


2. Historias de Usuario

Historia 1: Visualización de hechos curiosos

Como usuario,
quiero ver un hecho curioso en pantalla al entrar a la aplicación,
para aprender algo interesante de inmediato.

Criterios de aceptación:

La aplicación muestra un hecho curioso al cargar.

Al solicitar un nuevo hecho, el anterior se reemplaza.

Historia 2: Guardar favoritos

Como usuario,
quiero guardar un hecho curioso en una lista de favoritos,
para consultarlo después.

Criterios de aceptación:

Existe un botón para guardar hechos.

Los hechos favoritos aparecen en una lista separada.

Historia 3: Responsividad

Como usuario,
quiero que la aplicación se vea bien en móviles, tablets y desktop,
para disfrutarla en cualquier dispositivo.

Criterios de aceptación:

El diseño es mobile-first.

La aplicación tiene al menos dos puntos de quiebre adicionales.

3. Herramientas y Tecnologías

Diseño: Figma

Desarrollo: HTML, CSS (SASS opcional), JavaScript.

Gestor de tareas: Trello

Control de versiones: Git / GitHub

Metodología: Scrum + Kanban

4. Estructura de Carpetas

project-root/
├── assets/
│      └──images
|
├── styles/
│       ├── welcome.css
|       └── facts.css
├── js/
│   ├── facts.js
│   └── api.js
|
├── index.html
|
└── README.md

5. Flujo de Trabajo con Git

Crear ramas para cada funcionalidad (“feature/”):

Ejemplo: feature/api-fetch, feature/responsive-design

Hacer pull requests a la rama dev y realizar code reviews.

Mergear dev a main solo cuando sea estable.

6. Calendario de Sprints

Semana

Actividades

1

Diseño en Figma, estructura inicial del proyecto, maquetación en HTML/CSS.

2

Desarrollo de funcionalidades: API Fetch, favoritos, responsividad.

3

Optimizaciones, pruebas, documentación, presentación final.

7. Definición de Hecho

Un incremento o historia de usuario está hecho cuando:

Pasa las pruebas manuales y/o automáticas.

Está correctamente documentado.

Cumple con los criterios de aceptación definidos.


