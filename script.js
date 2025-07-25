// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const faqItems = document.querySelectorAll('.faq-item');
const heroVideo = document.getElementById('heroVideo');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// FAQ Accordion
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hero video fallback
if (heroVideo) {
    heroVideo.addEventListener('error', () => {
        console.log('Video failed to load, using fallback');
        const heroSection = document.querySelector('.hero');
        heroSection.style.background = 'linear-gradient(135deg, #0f171e 0%, #1a2832 50%, #00a8e1 100%)';
    });
}

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .plan-card, .about-text, .about-image');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Plan selection functionality
document.querySelectorAll('.btn-plan').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.plan-card').querySelector('h3').textContent;
        showPlanModal(planName);
    });
});

// Hero buttons functionality
document.querySelectorAll('.hero-buttons .btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('btn-primary')) {
            // Start watching functionality
            showWelcomeModal();
        } else {
            // Learn more - scroll to services
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sign in/up buttons
document.querySelector('.signin-btn').addEventListener('click', () => {
    showAuthModal('signin');
});

document.querySelector('.signup-btn').addEventListener('click', () => {
    showAuthModal('signup');
});

// Modal functions
function showPlanModal(planName) {
    const modal = createModal(`
        <div class="modal-content">
            <h2>Subscribe to ${planName} Plan</h2>
            <p>You've selected the ${planName} plan. Sign up now to start your free trial!</p>
            <div class="modal-buttons">
                <button class="btn btn-primary" onclick="closeModal()">Start Free Trial</button>
                <button class="btn btn-secondary" onclick="closeModal()">Maybe Later</button>
            </div>
        </div>
    `);
    showModal(modal);
}

function showWelcomeModal() {
    const modal = createModal(`
        <div class="modal-content">
            <h2>Welcome to Watch Tube TV!</h2>
            <p>Sign up now to start watching thousands of movies and TV shows instantly.</p>
            <div class="modal-buttons">
                <button class="btn btn-primary" onclick="closeModal()">Start Free Trial</button>
                <button class="btn btn-secondary" onclick="closeModal()">Browse Content</button>
            </div>
        </div>
    `);
    showModal(modal);
}

function showAuthModal(type) {
    const title = type === 'signin' ? 'Sign In' : 'Sign Up';
    const buttonText = type === 'signin' ? 'Sign In' : 'Start Free Trial';
    const modal = createModal(`
        <div class="modal-content">
            <h2>${title}</h2>
            <form class="auth-form">
                <input type="email" placeholder="Email address" required>
                <input type="password" placeholder="Password" required>
                ${type === 'signup' ? '<input type="password" placeholder="Confirm Password" required>' : ''}
                <button type="submit" class="btn btn-primary">${buttonText}</button>
            </form>
            <p class="auth-switch">
                ${type === 'signin' ? 
                    'New to Watch Tube TV? <a href="#" onclick="showAuthModal(\'signup\'); return false;">Sign up now</a>' : 
                    'Already have an account? <a href="#" onclick="showAuthModal(\'signin\'); return false;">Sign in</a>'
                }
            </p>
        </div>
    `);
    showModal(modal);
}

function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        ${content}
    `;
    return modal;
}

function showModal(modal) {
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Video quality selector (simulate different qualities)
const videoQualities = ['360p', '720p', '1080p', '4K'];
let currentQuality = 2; // Default to 1080p

function changeVideoQuality(direction) {
    if (direction === 'up' && currentQuality < videoQualities.length - 1) {
        currentQuality++;
    } else if (direction === 'down' && currentQuality > 0) {
        currentQuality--;
    }
    
    // Simulate quality change
    console.log(`Video quality changed to: ${videoQualities[currentQuality]}`);
}

// Performance optimization: Lazy load images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Auto-hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add modal styles dynamically
const modalStyles = `
<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1a2832;
    padding: 40px;
    border-radius: 15px;
    max-width: 400px;
    width: 90%;
    text-align: center;
    border: 1px solid rgba(0, 168, 225, 0.3);
}

.modal-content h2 {
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.modal-content p {
    color: #b3b3b3;
    margin-bottom: 30px;
    line-height: 1.6;
}

.modal-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.auth-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
}

.auth-form input {
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 16px;
}

.auth-form input::placeholder {
    color: #b3b3b3;
}

.auth-form input:focus {
    outline: none;
    border-color: #00a8e1;
}

.auth-switch {
    color: #b3b3b3;
    font-size: 14px;
}

.auth-switch a {
    color: #00a8e1;
    text-decoration: none;
}

.auth-switch a:hover {
    text-decoration: underline;
}

@media (max-width: 480px) {
    .modal-content {
        padding: 30px 20px;
    }
    
    .modal-buttons {
        flex-direction: column;
    }
    
    .modal-buttons .btn {
        width: 100%;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Watch Tube TV - Streaming Platform Loaded');
    
    // Simulate loading time for better UX
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Error handling for video
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'VIDEO') {
        console.warn('Video failed to load, using fallback background');
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.background = 'linear-gradient(135deg, #0f171e 0%, #1a2832 50%, #00a8e1 100%)';
        }
    }
}, true);

// Preload critical resources
const preloadVideo = () => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    video.load();
};

// Call preload after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadVideo);
} else {
    preloadVideo();
}