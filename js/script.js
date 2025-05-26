class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupNav();
        this.setupTestimonials();
        this.setupModals();
        this.setupIntersectionObserver();
        this.setupGiftTrigger();
    }

    setupNav() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;
        this.navbarHeight = this.navbar.offsetHeight;

        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        window.addEventListener('resize', () => this.handleResize());
    }

    handleScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll < this.lastScroll && currentScroll > 50) {
            this.navbar.classList.add('fixed-top', 'bg-dark');
            document.body.style.paddingTop = this.navbarHeight + "px";
        } else {
            this.navbar.classList.remove('fixed-top', 'bg-dark');
            document.body.style.paddingTop = "0";
        }
        this.lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }

    handleResize() {
        this.navbarHeight = this.navbar.offsetHeight;
    }

    setupTestimonials() {
        this.testimonials = [
            { text: "Meilleur restaurant !", author: "Jean D." },
            { text: "Pâtes délicieuses.", author: "Marie L." }
        ];
        this.testimonialText = document.getElementById('testimonial-text');
        this.testimonialAuthor = document.getElementById('testimonial-author');
        if (this.testimonialText && this.testimonialAuthor) {
            this.showTestimonial();
            setInterval(() => this.showTestimonial(), 5000);
        }
    }

    showTestimonial() {
        const { text, author } = this.testimonials[
            Math.floor(Math.random() * this.testimonials.length)
        ];
        this.testimonialText.textContent = text;
        this.testimonialAuthor.textContent = author;
    }

    setupModals() {
        this.reservationModal = document.getElementById('reservation-modal');
        const openBtns = document.querySelectorAll('.cta-button, [data-toggle="modal"]');
        const closeBtn = document.getElementById('close-reservation');

        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleModal(true);
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.toggleModal(false));
        }

        if (this.reservationModal) {
            this.reservationModal.addEventListener('click', (e) => {
                if (e.target === this.reservationModal) {
                    this.toggleModal(false);
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.toggleModal(false);
        });
    }

    toggleModal(show) {
        if (!this.reservationModal) return;
        this.reservationModal.style.display = show ? 'flex' : 'none';
        document.body.style.overflow = show ? 'hidden' : '';
    }

    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) return;
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }

    setupGiftTrigger() {
        const giftTrigger = document.getElementById('giftTrigger');
        const aboutSection = document.getElementById('aboutDev');
        if (giftTrigger && aboutSection) {
            giftTrigger.addEventListener('click', function () {
                if (aboutSection.style.display === 'none' || !aboutSection.style.display) {
                    aboutSection.style.display = 'block';
                    this.style.display = 'none';
                } else {
                    aboutSection.style.display = 'none';
                }
            });
        }
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => new App());