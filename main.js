
// Animación del texto
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    cursor: "<span style='color: #ecd4a5;'>|</span>",
});

typewriter
    .pauseFor(2500)
    .typeString('<span style="color: #ecd4a5;">Desarrollo de sitios web, aplicaciones web y de escritorio, así como diseño de personajes modelados en 3D.</span>')
    .pauseFor(200)
    .deleteChars(10)
    .start();
