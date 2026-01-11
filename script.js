// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        mobileNav.classList.add('active');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

// Handle navigation clicks
function handleNavClick(event, href) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

// Scroll to about section
function scrollToAbout() {
    const element = document.querySelector('#about');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle scroll for navigation
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navigation');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('navigation');
    const mobileNav = document.getElementById('mobile-nav');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (mobileNav && mobileNav.classList.contains('active')) {
        if (!nav.contains(event.target)) {
            toggleMobileMenu();
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial nav state
    const nav = document.getElementById('navigation');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    }
});
