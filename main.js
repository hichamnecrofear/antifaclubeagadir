// JavaScript for nav
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => otherLink.classList.remove('active'));
        link.classList.add('active');
    });
});

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



// JavaScript for FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.querySelector('.answer');
            answer.classList.toggle('show');
        });
    });
});

// JavaScript to toggle the visibility of the navigation bar
document.getElementById("toggleNav").addEventListener("click", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("show");
});
