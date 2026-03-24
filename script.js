//Boton de saludar

function saludo(){
    alert("Hola, Gracias por visitar mi portafolio 😁");
}

//Scroll suave del menu
document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animacion al hacer scroll

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    
    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            section.style.opacity = "1";
            section.style.transofrm = "transalteY(0)";
        }
    });
});

const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
  logo.style.textShadow = "0 0 20px rgba(56,189,248,0.8)";
});

logo.addEventListener("mouseleave", () => {
  logo.style.textShadow = "none";
});