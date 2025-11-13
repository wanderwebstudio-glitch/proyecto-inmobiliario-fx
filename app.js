
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



