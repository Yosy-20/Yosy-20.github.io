let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #644b39;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #644b39;">Desarrollo sitios web, proyectos de multimedia y Animación digital.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
