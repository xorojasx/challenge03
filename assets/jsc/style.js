var navMenu = document.querySelector(".menu-toggle");
const cambiaClase = () => {
    let menuItem = document.getElementById('menu');
    menuItem.classList.toggle('menu-open');
};
navMenu.addEventListener('click',cambiaClase,false);
