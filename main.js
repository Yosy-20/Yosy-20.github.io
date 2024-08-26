// Función para redirigir a sobre mi 
function irAhero() {
    window.location.href = "hero.html";
}

// Función para redirigir a web 
function irAweb() {
    window.location.href = "web.html";
}
// Función para redirigir a personaje
function irAcharacter() {
    window.location.href = "character.html";
}
// Función para redirigir a web 
function irAcontact() {
    window.location.href = "contact.html";
}

// Agrega un evento de clic al label
document.getElementById("aboutMe").addEventListener("click", irAhero);

document.getElementById("webDeveloment").addEventListener("click", irAweb);

document.getElementById("characterDesing").addEventListener("click", irAcharacter);

document.getElementById("contact").addEventListener("click", irAcontact);

//animacion del texto
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    cursor: "<span style='color: #ecd4a5;'>|</span>",
});

typewriter
    .pauseFor(2500)
    .typeString('<span style="color: #ecd4a5;">Development of websites, web applications, and desktop applications, as well as designing 3D modeled characters.</span>')
    .pauseFor(200)
    .deleteChars(10)
    .start();

    