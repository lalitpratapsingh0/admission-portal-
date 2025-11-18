  // Theme toggle
        const checkbox = document.getElementById('checkbox');
        const body = document.body;

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('light-mode');
            } else {
                body.classList.remove('light-mode');
            }
        });

        // Form submission
        document.getElementById('admissionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const loading = document.getElementById('loading');
            
            // Show loading
            form.style.display = 'none';
            loading.style.display = 'block';
            
            // Simulate submission
            setTimeout(() => {
                loading.style.display = 'none';
                alert('🎉 Application submitted successfully! We will contact you within 5-7 business days.');
                form.reset();
                form.style.display = 'block';
            }, 2000);
        });

        // Smooth scroll function
        function scrollToForm() {
            document.getElementById('apply').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add parallax effect to background shapes
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xMove = (x - 0.5) * speed;
                const yMove = (y - 0.5) * speed;
                shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });

        // Add entrance animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .form-container, .timeline').forEach(el => {
            observer.observe(el);
        });