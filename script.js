// Add interactivity to planet cards
const planetCards = document.querySelectorAll('.planet-card');

planetCards.forEach(card => {
  card.addEventListener('click', () => {
    const planet = card.getAttribute('data-planet');
    alert(`You clicked on ${planet.toUpperCase()}!`);
  });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add parallax effect to the header planet
const parallaxPlanet = document.querySelector('.parallax-planet');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxPlanet.style.transform = `translateY(${scrollY * 0.2}px)`;
});