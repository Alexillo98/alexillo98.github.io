
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    // Alternar dirección de entrada
    if (index % 2 === 0) {
      section.classList.add("from-left");
    }

    setTimeout(() => {
      section.classList.add("visible");
    }, index * 300); // efecto en cascada
  });
});
