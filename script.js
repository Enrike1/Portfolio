// add class navbarDark on navbar scroll// classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element

// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned

const header = document.querySelector('.navbar-dark');

// console. log() envía un mensaje a la consola del navegador sin interrumpir el funcionamiento de la web; alert() muestra una ventana con el mensaje encima del navegador y no permite continuar hasta pulsar en el botón aceptar 

console.log(header)

window.onscroll = function() {

// la propiedad scrollY de solo lectura de la interfaz de la ventana devuelve la cantidad de píxeles que el documento se desplaza verticalmente actualmente

    const top = window.scrollY;
    if(top >=25) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// collapse navbar after click on small devices
// Para crear una barra de navegación plegable, use un botón con class="navbar-toggler", 
// data-toggle="collapse" y data-target="#thetarget".
// Luego envuelva el contenido de la barra de navegación (enlaces, etc.) dentro de un elemento div 
// con class="collapse navbar-collapse", seguido de una identificación que coincida con el objetivo de datos del botón: "thetarget"

	const navLinks = document.querySelectorAll('.nav-item')
	const menuToggle = document.getElementById('navbarSupportedContent')

	navLinks.forEach((l) => {
    	l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// funcionalidades para desplazarse hacia arriba y abajo
// La primera línea selecciona el botón de desplazar-hacia-arriba/abajo con el atributo id "#desplazarse-hacia-/abajo" adjunto a el en el HTML. 
// Utiliza el método querySelector() en lugar del método getElementById()
// En las líneas restantes, el eventListener del click obtiene la acción click del usuario y hace que reaccione la parte de scrollBy del objeto de Windows, para que el botón funcione.
// Cada vez que el usuario hace click en el botón desplazar-hacia-arriba/abajo, la página se desplaza hacia arriba o abajo 600 píxeles.  
// Esto se logra configurando las propiedades left a 0 y top a -/+ 600.

const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollBy(0, -600);
});

const desplazarAbajo = document.querySelector("#desplazarse-hacia-abajo");

desplazarAbajo.addEventListener("click", () => {
  window.scrollBy(0, 600);
});

