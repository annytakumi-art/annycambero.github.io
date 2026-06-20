document.addEventListener('DOMContentLoaded', ( )  => {
const sobreMi =  document.getElementById ('app');

if (!sobreMi) {
        console.error("Error en encontrar al contenedor de la web");
        return;
    }

const header = document.createElement('header');
const titulo = document.createElement('h1');
titulo.textContent = 'Bienvenidos a mi web';

const botonSobreMi = document.createElement('button');
botonSobreMi.textContent = 'Sobre mí';

const botonProyectos = document.createElement('button');
botonProyectos.textContent = 'Mis proyectos';

const botonHabilidades = document.createElement('button');
botonHabilidades.textContent = 'Mis habilidades'

const botonModoOscuro = document.createElement('button');
botonModoOscuro.id = 'Modo-oscuro';
botonModoOscuro.textContent = 'Alternar Modo Oscuro';
botonModoOscuro.style.marginLeft = '20px';

const seccionSobreMi = document.createElement('section');
seccionSobreMi.id = 'seccionSobreMi';

const seccionProyectos = document.createElement('section');
seccionProyectos.id = 'seccionProyectos';

const seccionHabilidades = document.createElement('section');
seccionHabilidades.id = 'seccionHabilidades';

header.appendChild(titulo);
header.appendChild(botonSobreMi);
header.appendChild(botonProyectos);
header.appendChild(botonHabilidades);
header.appendChild(botonModoOscuro);

sobreMi.prepend(header);

seccionSobreMi.innerHTML = `
    <h2> Bienvenidos a mi Web </h2>
    
    `;


})