let mensaje = '';

nombre = prompt("ingrese su nombre ");

if (nombre === 'Chasi' || nombre === 'chasi') {
    mensaje = 'Usted es un cara de verga'
    alert(mensaje)

} else if (nombre !== 'Chasi') {
    peso = prompt('ingrese su peso ');
    altura = prompt('Ingrese su altura');

    mensaje = 'usted esta saludable'
}


const container = document.querySelector('main');
const div = document.createElement('div')
div.classList.add('contenido')

const contenido = `<h1> Señor/a ${nombre}:</h1>
<h2>${mensaje}</h2>

`
div.innerHTML = contenido

container.appendChild(div)




