document.addEventListener('DOMContentLoaded', ( )  => {
const sobreMi =  document.getElementById ('sobreMi');

if (!sobreMi) {
        console.error("Error en encontrar al contenedor de la web");
        return;
    }
    //esto es para que se quede guardada la opción de claro u oscuro
const modoGuardado = localStorage.getItem('modoElegido');

if (modoGuardado === 'oscuro') {
        document.body.classList.add('tema-oscuro');
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
    
    if(document.body.classList.contains('tema-oscuro')){
        localStorage.setItem('modoElegido', 'oscuro');
    }else{
        localStorage.setItem('modoElegido', 'claro');
    }
});

//haciendo el icono de contáctame animado

const crearSobreAnimado = () => {
    const contenedorMail = document.createElement('div');
    contenedorMail.classList.add('iconoMail');

    const regresaMail = document.createElement('div');
    regresaMail.classList.add('regresaMail');

    const cartaMail = document.createElement('div');
    cartaMail.classList.add('cartaMail');

    const frenteCarta = document.createElement('div');
    frenteCarta.classList.add('frenteCarta');

    const cartaSolapa = document.createElement('div');
    cartaSolapa.classList.add('cartaSolapa');

    contenedorMail.appendChild(regresaMail);
    contenedorMail.appendChild(cartaMail);
    contenedorMail.appendChild(frenteCarta);
    contenedorMail.appendChild(cartaSolapa);

    return contenedorMail;
};
botonContactame.addEventListener('click', () => {
    vistaPrincipal.innerHTML = `
        <section id="seccionContactame">
            <h2> Contáctame </h2>
            <p>¡Hablemos sobre código y diseño! Haz clic en el sobre para enviarme un correo.</p>
            <div id="contenedor-sobre"></div> 
        </section>
    `;
    

    const espacioParaSobre = document.getElementById('contenedor-sobre');
    
    if (espacioParaSobre) {
        const miSobre = crearSobreAnimado(); 
        espacioParaSobre.appendChild(miSobre);
        console.log("Sobre añadido exitosamente");
    } else {
        console.error("No se encontró el contenedor-sobre en el DOM");
    }
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


    /* Aquí van mis proyectos */
    const misProyectos = [
    {
            titulo: "Página sobre Stray kids",
            descripcion: "Es mi primera página estática, de mi grupo K-pop favorito",
            tecnologias: ["JavaScript", "HTML/CSS", "SQL"],
            enlaceRepositorio: "https://annytakumi-art.github.io/practica-web-estatica-SKZ/",
            imagen: "imagenes/albumDoit.jpg"
            },
           
        ];
        const tarjetasProyectosHTML = misProyectos.map(proyecto => `
            <article class="tarjeta-proyecto">
                <img src="${proyecto.imagen}" alt="Imagen de ${proyecto.titulo}" width="10%">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <p><strong>Tecnologías:</strong> ${proyecto.tecnologias.join(', ')}</p>
                <a href="${proyecto.enlaceRepositorio}" target="_blank">Ver en GitHub</a>
            </article>
        `).join('');
        
    const vistaProyectosHTML = `
    <h2> Mis proyectos </h2> 
    
    <div class="contenedor-proyectos">
        ${tarjetasProyectosHTML}
    </div>
    `;
   

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
        cambiarVista(vistaSobreMiHTML);
};
configurarNavegacion();



})