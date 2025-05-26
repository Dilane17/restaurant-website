let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll < lastScrollTop && currentScroll > 50) {
        navbar.classList.add("fixed-top", "bg-dark");
        document.body.style.paddingTop = navbarHeight + "px";
    } else {
        navbar.classList.remove("fixed-top", "bg-dark");
        document.body.style.paddingTop = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
const testimonials = [
  { text: "Meilleur restaurant !", author: "Jean D." },
  { text: "Pâtes délicieuses.", author: "Marie L." }
];
function showTestimonial() {
  const random = Math.floor(Math.random() * testimonials.length);
  document.getElementById("testimonial-text").textContent = testimonials[random].text;
  document.getElementById("testimonial-author").textContent = testimonials[random].author;
}
// Change toutes les 5 secondes
setInterval(showTestimonial, 5000);

// Gestion du popup de réservation
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('reservation-modal').style.display = 'flex';
});
document.getElementById('close-reservation').addEventListener('click', function() {
    document.getElementById('reservation-modal').style.display = 'none';
});
// Fermer le popup si on clique en dehors du formulaire
document.getElementById('reservation-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
document.getElementById('giftTrigger').addEventListener('click', function() {
  const aboutSection = document.getElementById('aboutDev');
  
  // Affiche/masque la section
  if (aboutSection.style.display === 'none') {
    aboutSection.style.display = 'block';
    this.style.display = 'none'; // Cache le cadeau après clic
  } else {
    aboutSection.style.display = 'none';
  }
});