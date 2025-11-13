document.addEventListener('DOMContentLoaded', () => {

    // 1. STAR ANIMATION SETUP
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;

    if (starsContainer) {
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
            star.style.animationDelay = Math.random() * 5 + 's';
            starsContainer.appendChild(star);
        }
    }

    // 2. SCROLL ANIMATIONS (Header scroll effect & Section visibility)
    const header = document.querySelector('.header');

    // Intersection Observer for section fade-in animation
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
        
        // Check if section is already in viewport on page load
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });

    // Header shrinking effect listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 4. Project Card Hover Effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 5. PHASE ACCORDION FUNCTIONALITY (Main phases)
    document.querySelectorAll('.phase-header').forEach(header => {
        header.addEventListener('click', () => {
            const phase = header.parentElement;
            const isActive = phase.classList.contains('active');
            
            // Close all phases
            document.querySelectorAll('.grimoire-phase').forEach(p => {
                p.classList.remove('active');
            });
            
            // Open clicked phase if it wasn't active
            if (!isActive) {
                phase.classList.add('active');
            }
        });
    });

    // 6. WEEK ACCORDION FUNCTIONALITY (Individual weeks within phases)
    document.querySelectorAll('.week-header').forEach(header => {
        header.addEventListener('click', () => {
            const week = header.parentElement;
            week.classList.toggle('active');
        });
    });

    // 7. SPARKLE EFFECT ON HOVER (Witchy magic!)
    document.querySelectorAll('.phase-header, .week-header').forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            // Create sparkle element
            const sparkle = document.createElement('span');
            sparkle.textContent = '✨';
            sparkle.className = 'sparkle-effect';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            document.body.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => sparkle.remove(), 1000);
        });
    });

    // 8. Force journey section to be visible immediately
    const journeySection = document.getElementById('journey');
    if (journeySection) {
        journeySection.classList.add('visible');
        journeySection.style.opacity = '1';
        journeySection.style.transform = 'translateY(0)';
    }

    // 9. RANDOM SPARKLE TRAIL (Optional extra magic)
    // Uncomment if you want sparkles to follow the mouse
    /*
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) { // Only create sparkles 5% of the time
            const sparkle = document.createElement('span');
            sparkle.textContent = '✨';
            sparkle.className = 'sparkle-effect';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
    });
    */

});