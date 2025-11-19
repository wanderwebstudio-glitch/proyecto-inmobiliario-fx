
     const scrollBtn = document.getElementById("scrollToTopBtn");

     // Mostrar u ocultar botón según el scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

     // Volver arriba suavemente
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });



document.querySelectorAll('.property-carousel').forEach(carousel => {
    let images = carousel.querySelectorAll("img");
    let index = 0;

    const showImage = (i) => {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    };

    carousel.querySelector(".carousel-arrow.left").onclick = () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    };

    carousel.querySelector(".carousel-arrow.right").onclick = () => {
        index = (index + 1) % images.length;
        showImage(index);
    };
});

//animacon numeros
function animateCounter(id, endValue, duration) {
let startValue = 0;
let startTime = null;


function animationStep(currentTime) {
if (!startTime) startTime = currentTime;
const progress = Math.min((currentTime - startTime) / duration, 1);
const value = Math.floor(progress * endValue);
document.getElementById(id).textContent = value;
if (progress < 1) requestAnimationFrame(animationStep);
}


requestAnimationFrame(animationStep);
}


const options = { threshold: 0.5 };


const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting && !entry.target.dataset.animated) {
const target = entry.target;
const endValue = parseInt(target.dataset.value);
animateCounter(target.id, endValue, 2000);
target.dataset.animated = "true";
}
});
}, options);


document.querySelectorAll('.counter').forEach(counter => {
observer.observe(counter);
});

document.querySelectorAll('.counter').forEach(counter => {
observer.observe(counter);
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Número proporcionado
    const phone = "18294244979";

    // Construir texto del mensaje
    const text = `Nombre: ${nombre}%0AEmail: ${email}%0AAsunto: ${asunto}%0AMensaje: ${mensaje}`;

    // Crear URL de WhatsApp
    const url = `https://wa.me/${phone}?text=${text}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const phone = "18574925572";

    const text = `Nombre: ${nombre}%0AEmail: ${email}%0AAsunto: ${asunto}%0AMensaje: ${mensaje}`;

    const url = `https://wa.me/${phone}?text=${text}`;

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Limpiar formulario
    document.getElementById("contactForm").reset();

    // Pintar de verde para confirmar envío
    const form = document.getElementById("contactForm");
    form.style.border = "2px solid green";
    form.style.padding = "10px";
    form.style.transition = "0.3s";

    // Quitar el borde verde después de 3 segundos (opcional)
    setTimeout(() => {
        form.style.border = "none";
    }, 3000);
});
