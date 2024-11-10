document.getElementById("sendButton").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const chatMessages = document.getElementById("chat-messages");

    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement("div");
        newMessage.textContent = messageInput.value;
        newMessage.classList.add("message");

        chatMessages.appendChild(newMessage);
        messageInput.value = "";

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Image animation when scrolling
    const images = document.querySelectorAll('img');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        images.forEach(image => {
            const imagePosition = image.getBoundingClientRect().top + window.pageYOffset;
            if (scrollPosition > imagePosition - window.innerHeight + 100) {
                image.style.transform = 'scale(1.05)';
                image.style.opacity = '1';
            }
        });
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll('.body section');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
});

// Dynamic text functionality for Hero Section
const dynamicText = document.querySelector('.dynamic-text');
const phrases = ["Inspire Your Soul", "Sing with Us", "Bring Joy Through Harmony", "Uplift with Music"];
let currentIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 50;
let delayBetweenPhrases = 3000;
let isDeleting = false;
let timer;

function typeEffect() {
    const currentPhrase = phrases[currentIndex];
    let currentLength = dynamicText.textContent.length;

    if (!isDeleting && currentLength < currentPhrase.length) {
        dynamicText.textContent = currentPhrase.substring(0, currentLength + 1);
    } else if (isDeleting && currentLength > 0) {
        dynamicText.textContent = currentPhrase.substring(0, currentLength - 1);
    } else if (!isDeleting && currentLength === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenPhrases);
        return;
    } else if (isDeleting && currentLength === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % phrases.length;
    }

    timer = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Initialize dynamic text typing effect
typeEffect();

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust scroll speed for parallax
});

// Animation for sections when they come into view
const fadeInSections = document.querySelectorAll('.fade-in');
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeInSections.forEach(section => {
    observer.observe(section);
});

// Optionally, if you want to add fade-in effects as users scroll
window.addEventListener('scroll', function () {
    const testimonials = document.querySelector('#testimonials-home');
    const testimonialsPosition = testimonials.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (testimonialsPosition < screenPosition) {
        testimonials.classList.add('fade-in');
    }
});







document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Add visible class to fade in elements when the page loads
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });

    // Intersection Observer for fade-in effect on scroll
    const options = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, options);

    // Observe fade-in sections
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

