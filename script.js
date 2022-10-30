const frases=['Los ordenadores son inútiles. Sólo pueden darte respuestas',
'Los ordenadores se hacen cada vez más inteligentes',
'Tener la conciencia limpia es señal de mala memoria',
'La verdad absoluta no existe, y esto es absolutamente cierto',
'Solo quería decirte que a alguien le importa, no a mí, pero a alguien sí le importa',
'Lo siento, si tuvieras razón, estaría de acuerdo contigo',
'El peor enemigo de un programador el usuario'];
const texto = document.getElementById('text');
const mensaje = document.getElementById('mensa');
const cuadro = document.getElementById('write');
const btn=document.getElementById('Play');
let textoOrden=0;
let palabras=[];
let tiempoInicio=Date.now();

document.getElementById('Play').addEventListener('click',()=>{
    btn.innerHTML='Cambiar Frase';
    texto.style.display='block';
    cuadro.style.display='block';
    let orden=Math.floor(Math.random()*frases.length);
    let frase=frases[orden];
    palabras = frase.split(' ');
    textoOrden=0;
    const mostrarPalabras = palabras.map(function(palabra) { return `<span>${palabra}</span>`});
    texto.childNodes[0].className = 'highlight';
    texto.innerHTML = mostrarPalabras.join(' ')
    mensaje.innerText = '';
    cuadro.value = '';
    cuadro.focus();
    tiempoInicio = new Date().getTime();

});
cuadro.addEventListener('input', () => {
    const palab = palabras[textoOrden];
    const escrito = cuadro.value;
    if (escrito === palab && textoOrden === palabras.length - 1) {
      const tiempo = new Date().getTime() - tiempoInicio;
      const message = `FELICITACIONES! Finalizaste en ${tiempo / 1000} segundos.`;
      mensaje.innerText = message;
      texto.style.display='none'
      cuadro.style.display='none'
      btn.innerHTML="Volver a jugar";btn.style.display='block'
    } else if (escrito.endsWith(' ') && escrito.trim() === palab) {
      cuadro.value = '';
      textoOrden++;
      for (const palabraElement of texto.childNodes) {
        palabraElement.className = '';
      }
      cuadro.childNodes[textoOrden].className = 'highlight';
    } else if (palab.startsWith(escrito)) {
      cuadro.className = '';
    } else {
      cuadro.className = 'error';
    }
  });