document.addEventListener('DOMContentLoaded', ( )  => {
const sobreMi =  document.getElementById ('sobreMi');

if (!sobreMi) {
        console.error("Error en encontrar al contenedor de la web");
        return;
    }

const header = document.createElement('header');
const titulo = document.createElement('h1');
titulo.textContent = 'Bienvenidos a mi web';

const nav = document.createElement('nav');

const botonSobreMi = document.createElement('button');
botonSobreMi.textContent = 'Sobre mí';

const botonContactame = document.createElement('button');
botonContactame.textContent = 'Contáctame';

const botonProyectos = document.createElement('button');
botonProyectos.textContent = 'Mis proyectos';

const botonHabilidades = document.createElement('button');
botonHabilidades.textContent = 'Mis habilidades'

const botonModoOscuro = document.createElement('button');
botonModoOscuro.id = 'Modo-oscuro';
botonModoOscuro.textContent = '';
botonModoOscuro.style.marginLeft = '20px';

botonModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('tema-oscuro');
});

header.appendChild(titulo);
nav.appendChild(botonSobreMi);
nav.appendChild(botonProyectos);
nav.appendChild(botonHabilidades);
nav.appendChild(botonContactame);
nav.appendChild(botonModoOscuro);
header.appendChild(nav);
sobreMi.prepend(header);


const vistaPrincipal = document.createElement('main');
    vistaPrincipal.id = 'vistaPrincipal';
    sobreMi.appendChild(vistaPrincipal); 

    const configurarNavegacion = () => {
    const vistaSobreMiHTML = `<img src="./imagenes/mifoto.png" alt="Foto de perfil de Anny" width="150px"> 
    <h2> Sobre mí </h2>
    <p>Hola!, me llamo Anny cambero Prieto y soy desarrolladora Full-Stack (DAW/DAM)<br>
    con una visión integral del producto digital. Mi camino hacia la programación no<br>
    empezó directamente en el código, sino escuchando a las personas. Tras años de <br>
    experiencia en soporte y atención al cliente, desarrollé una empatía profunda <br>
    hacia las necesidades del usuario final y una gran agilidad para la resolución <br>
    de problemas.<br><br>
     
    Un día decidí que no solo quería resolver las incidencias de las aplicaciones, <br>
    sino construirlas. Hoy, traduzco esa mentalidad centrada en el usuario en código <br>
    limpio y eficiente utilizando Java, Python, JavaScript, HTML5, CSS y SQL.<br><br>
     
    Además, mi faceta como ilustradora y mi manejo del diseño digital me aportan un <br>
    ojo crítico para el detalle y la usabilidad (UI/UX). No me conformo con que el <br>
    software funcione; busco que la experiencia sea intuitiva y visualmente impecable.<br><br>
     
    Con un flujo de trabajo basado en Git/GitHub, una gran capacidad de autoaprendizaje<br>
    y un certificado reciente en Inteligencia Artificial para no quedarme atrás en la<br>
    innovación, busco un equipo donde pueda seguir creciendo y aportando valor desde <br>
    el primer commit. </p>
    `;
    const vistaProyectosHTML = `
        <h2> Mis proyectos </h2>
        
    `;
    const vistaHabilidadesHTML =`
        <h2> Mis habilidades </h2>

        <h3> Soft skills</3>

        <h3> Hard skills</3>
        `;
    const vistaContactameHTML = `
        <h2> Contáctame </h2>
    `;

    function cambiarVista(nuevoHTML) {
            vistaPrincipal.innerHTML = nuevoHTML;
        }

    botonSobreMi.addEventListener('click', () => cambiarVista(vistaSobreMiHTML));
    botonProyectos.addEventListener('click', () => cambiarVista(vistaProyectosHTML));
    botonHabilidades.addEventListener('click', () => cambiarVista(vistaHabilidadesHTML));
    botonContactame.addEventListener('click', () => cambiarVista(vistaContactameHTML));

        cambiarVista(vistaSobreMiHTML);
};
configurarNavegacion();

})