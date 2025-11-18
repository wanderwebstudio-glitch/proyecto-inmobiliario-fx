
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