
// HERO
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

// HAMBURGUER MENU
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

// HEADER
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // si el usuario ha bajado 50px
    header.style.opacity = '0.75'; // reduce a 75%
  } else {
    header.style.opacity = '1'; // vuelve a opacidad completa
  }
});


//TEXTO SECCIONES

const aboutSection = document.querySelector(".about-section");
const aboutText = document.querySelector(".about-text");
const aboutImage = document.querySelector(".about-image");

if (aboutSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          // Texto entra primero (sutil)
          aboutText.style.opacity = "1";
          aboutText.style.transform = "translateY(0)";

          // Imagen entra después (protagonista)
          setTimeout(() => {
            aboutImage.style.opacity = "1";
            aboutImage.style.transform = "translateX(0)";
          }, 150);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
}

// HABILIDADES SECCION

const skillsSection = document.querySelector(".skills-section");
const skillFills = document.querySelectorAll(".skill-fill");

if (skillsSection) {
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillFills.forEach(bar => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  skillsObserver.observe(skillsSection);
}

// SOFTWARES
const softwareChart = document.querySelector(".software-chart");

if (softwareChart) {
  const softwareObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          softwareChart.style.opacity = "1";
          softwareChart.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.3 }
  );

  softwareObserver.observe(softwareChart);
}

