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