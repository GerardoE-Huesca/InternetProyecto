// Función para mostrar la página seleccionada
function showPage(pageId) {
    // Oculta todas las páginas
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // Quita la clase "active" de todos los enlaces del navbar
    var navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Muestra la página seleccionada y activa el enlace correspondiente
    document.getElementById(pageId).classList.add('active');
    document.getElementById(pageId + '-link').classList.add('active');
}
