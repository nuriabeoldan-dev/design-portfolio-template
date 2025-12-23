
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


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu a');

  // Toggle menú hamburguesa
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Scroll suave al hacer click en un enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Cierra el menú
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });
});

// Función para scroll desde el logo
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

