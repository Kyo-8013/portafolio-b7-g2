let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
typewriter
  .pauseFor(2500) // milisegundos 2.5 segundos
  .typeString('¡Hola! Soy Abigail Castillo')
  .pauseFor(300)
  .deleteAll()
  .typeString('Diseñadora Gráfica y Web ')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Front-End Jr.')
  .pauseFor(1000)
  .start()