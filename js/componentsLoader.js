// componentsLoader.js

// Función para cargar un componente
document.addEventListener('DOMContentLoaded', () => {
    function loadComponent(component, containerId) {
        fetch(`components/${component}.html`)
            .then(response => response.text())
            .then(data => {
            // Insertar el componente en el contenedor especificado
            document.getElementById(containerId).innerHTML = data;
        })
            .catch(error => {
            console.error(`Error loading the component ${component}:`, error);
        });
    }
     
    loadComponent('header','header-container');
    loadComponent('footer','footer-container');
  
})