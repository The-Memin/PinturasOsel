// componentsLoader.js

// Función para cargar un componente
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
  // Función para cargar múltiples componentes
function loadComponents(components) {
    components.forEach(component => {
      switch (component) {
        case 'header':
          loadComponent('header', 'header-container');
          break;
        case 'footer':
          loadComponent('footer', 'footer-container');
          break;
        case 'sidebar':
          loadComponent('sidebar', 'sidebar-container');
          break;
        default:
          console.warn(`Component ${component} not found.`);
      }
    });
}
  