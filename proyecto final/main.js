const toggleMenuElement = document.getElementById('toggle-menu');
const navMenuElement = document.getElementById('nav-menu');
toggleMenuElement.addEventListener('click', () => {
   navMenuElement.classList.toggle('main-menu--show');
});

if (navMenuElement.classList.contains("main-menu--show")){
   toggleMenuElement.setAttribute("arial-label", "Cerrar menu");

} else {
   toggleMenuElement.setAttribute("arial-label", "Abrir menu");
};