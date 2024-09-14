// script.js

const toggleButton = document.getElementById('toggle-contrast');
const estiloLink = document.getElementById('estilo');

toggleButton.addEventListener('click', () => {
    if (estiloLink.getAttribute('href') === 'estilos-estandar.css') {
        estiloLink.setAttribute('href', 'estilos-alto-contraste.css');
        toggleButton.textContent = 'Cambiar a Estilo Estándar';
    } else {
        estiloLink.setAttribute('href', 'estilos-estandar.css');
        toggleButton.textContent = 'Cambiar a Alto Contraste';
    }
});
