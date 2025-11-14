
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


