const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

// Evitamos el efecto en móviles
if (window.innerWidth > 768) {
  hero.addEventListener("mousemove", (e) => {
    const { width, height } = hero.getBoundingClientRect();

    const x = (e.clientX / width - 0.5) * 20;
    const y = (e.clientY / height - 0.5) * 20;

    heroContent.style.transform = `
      translate(${x}px, ${y}px)
    `;
  });

  hero.addEventListener("mouseleave", () => {
    heroContent.style.transform = "translate(0, 0)";
  });
}
