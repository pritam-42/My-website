// ========================================
// Main JavaScript - Portfolio 2026
// ========================================

(function() {
    'use strict';
    
    // ========================================
    // Global Variables
    // ========================================
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    let autoPlayInterval;
    
    // ========================================
    // Page Loader
    // ========================================
    window.addEventListener('load', () => {
        const loader = document.querySelector('.page-loader');
        setTimeout(() => {
            loader.classList.add('hidden');
            initAnimations();
        }, 1000);
    });
    
    // ========================================
    // GSAP Animations
    // ========================================
    function initAnimations() {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero Section Animations
        const tl = gsap.timeline();
        
        tl.to('.title-line', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, '-=0.4')
        .from('.hero-buttons', {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, '-=0.4')
        .from('.hero-stats .stat-item', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1
        }, '-=0.4')
        .from('.profile-card', {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6');
        
        // Scroll-triggered animations
        gsap.utils.toArray('section:not(#hero)').forEach(section => {
            gsap.from(section.querySelector('.section-header'), {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        // About features animation
        gsap.from('.feature-item', {
            scrollTrigger: {
                trigger: '.about-features',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out'
        });
        
        // Skills animation
        gsap.from('.skill-card', {
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            onComplete: animateSkillBars
        });
        
        // Timeline animation
        gsap.utils.toArray('.timeline-item').forEach(item => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        // Projects stagger
        gsap.from('.project-item', {
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }
    
    // ========================================
    // Custom Cursor
    // ========================================
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .magnetic, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorFollower.classList.remove('active');
        });
    });
    
    // ========================================
    // Scroll Progress Bar
    // ========================================
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight);
        scrollProgress.style.transform = `scaleX(${scrolled})`;
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ========================================
    // Theme Toggle
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
    
    // ========================================
    // Typewriter Effect
    // ========================================
    const typewriterElement = document.querySelector('.typewriter');
    const texts = [
        'Full Stack Developer',
        'UI/UX Designer',
        'Creative Problem Solver',
        'Tech Enthusiast'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    setTimeout(typeWriter, 1000);
    
    // ========================================
    // Counter Animation
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // Trigger counters on scroll
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;
    
    window.addEventListener('scroll', () => {
        if (!countersAnimated && isInViewport(document.querySelector('.hero-stats'))) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });
            countersAnimated = true;
        }
    });
    
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }
    
    // ========================================
    // 3D Tilt Effect
    // ========================================
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.3
        });
    }
    
    // ========================================
    // Skill Progress Bars
    // ========================================
    function animateSkillBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        });
    }
    
    // ========================================
    // Project Filtering
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });
    
    // Initialize all projects as visible
    projectItems.forEach(item => item.classList.add('show'));
    
    // ========================================
    // Project Modal
    // ========================================
    const projectModal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalGithubLink = document.getElementById('modalGithubLink');
    
    // Project data
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A comprehensive e-commerce solution built with React and Node.js. Features include user authentication, product management, shopping cart, payment integration with Stripe, order tracking, and an admin dashboard for managing products and orders. The platform is fully responsive and optimized for performance with lazy loading and code splitting.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            live: 'https://example.com',
            github: 'https://github.com'
        },
        {
            title: 'Analytics Dashboard',
            description: 'Real-time analytics platform featuring interactive charts and data visualization. Built with Vue.js and Chart.js, it provides comprehensive insights into business metrics, user behavior, and performance indicators. Includes customizable widgets, export functionality, and collaborative features for team sharing.',
            tech: ['Vue.js', 'Chart.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
            live: 'https://example.com',
            github: 'https://github.com'
        },
        {
            title: 'Fitness Tracking App',
            description: 'Mobile-first fitness application for tracking workouts, nutrition, and health metrics. Features workout planning, progress tracking, calorie counting, and integration with fitness wearables. Built with React Native for cross-platform compatibility and offline-first architecture.',
            tech: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
            live: 'https://example.com',
            github: 'https://github.com'
        },
        {
            title: 'Creative Agency Website',
            description: 'Award-winning portfolio website for a creative agency featuring stunning animations and interactive elements. Built with HTML5, CSS3, and GSAP for smooth animations. Includes case studies, team profiles, and a custom CMS for easy content management.',
            tech: ['HTML5', 'CSS3', 'GSAP', 'JavaScript', 'Wordpress'],
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
            live: 'https://example.com',
            github: 'https://github.com'
        },
        {
            title: 'Project Management Tool',
            description: 'Collaborative SaaS platform for project management with real-time updates. Features include task management, team collaboration, file sharing, time tracking, and integrations with popular tools like Slack and GitHub. Built with a microservices architecture for scalability.',
            tech: ['Node.js', 'React', 'PostgreSQL', 'Socket.io', 'Docker'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            live: 'https://example.com',
            github: 'https://github.com'
        },
        {
            title: 'Social Media App',
            description: 'Next-generation social networking platform with innovative features for content creation and sharing. Includes photo/video sharing, stories, direct messaging, live streaming, and AI-powered content recommendations. Built with Flutter for beautiful native experiences on iOS and Android.',
            tech: ['Flutter', 'Firebase', 'Node.js', 'WebRTC', 'TensorFlow'],
            image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
            live: 'https://example.com',
            github: 'https://github.com'
        }
    ];
    
    window.openProject = function(index) {
        const project = projects[index];
        
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalLiveLink.href = project.live;
        modalGithubLink.href = project.github;
        
        modalTech.innerHTML = '';
        project.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tech;
            modalTech.appendChild(tag);
        });
        
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    window.closeProject = function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProject();
        }
    });
    
    // ========================================
    // Testimonials Slider
    // ========================================
    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.remove('active');
            if (i === index) {
                t.classList.add('active');
            }
        });
        
        updateDots();
    }
    
    function updateDots() {
        const dotsContainer = document.querySelector('.slider-dots');
        dotsContainer.innerHTML = '';
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (index === currentTestimonial) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                showTestimonial(currentTestimonial);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextTestimonial, 5000);
    }
    
    // Initialize testimonials
    if (testimonials.length > 0) {
        showTestimonial(0);
        autoPlayInterval = setInterval(nextTestimonial, 5000);
        
        document.querySelector('.next-btn').addEventListener('click', () => {
            nextTestimonial();
            resetAutoPlay();
        });
        
        document.querySelector('.prev-btn').addEventListener('click', () => {
            prevTestimonial();
            resetAutoPlay();
        });
    }
    
    // ========================================
    // Contact Form Validation (guarded)
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const formGroups = contactForm.querySelectorAll('.form-group');

            formGroups.forEach(group => {
                const input = group.querySelector('input, textarea');
                const errorMessage = group.querySelector('.error-message');

                if (!input.value.trim()) {
                    group.classList.add('error');
                    if (errorMessage) errorMessage.textContent = 'This field is required';
                    isValid = false;
                } else if (input.type === 'email' && !isValidEmail(input.value)) {
                    group.classList.add('error');
                    if (errorMessage) errorMessage.textContent = 'Please enter a valid email';
                    isValid = false;
                } else {
                    group.classList.remove('error');
                    if (errorMessage) errorMessage.textContent = '';
                }
            });

            if (isValid) {
                // Simulate form submission
                contactForm.style.display = 'none';
                if (formSuccess) formSuccess.classList.add('show');

                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    if (formSuccess) formSuccess.classList.remove('show');
                }, 3000);
            }
        });

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        // Remove error on input
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                const formGroup = input.closest('.form-group');
                if (formGroup) formGroup.classList.remove('error');
            });
        });
    }
    
    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================================
    // Magnetic Button Effect
    // ========================================
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
    
    // ========================================
    // Download CV Button
    // ========================================
    document.getElementById('downloadCV').addEventListener('click', (e) => {
        e.preventDefault();
        // In a real scenario, this would download an actual PDF
        alert('CV download would start here. Please add your actual CV file.');
    });
    
    // ========================================
    // Lazy Loading Images
    // ========================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ========================================
    // Parallax Effect
    // ========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Parallax for hero image
        const heroImage = document.querySelector('.profile-card');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    
    // ========================================
    // Console Easter Egg
    // ========================================
    console.log('%cHello Developer! 👋', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cLike what you see? Let\'s work together!', 'font-size: 14px; color: #64748b;');
    console.log('%cContact: hello@example.com', 'font-size: 14px; color: #64748b;');
    
})();