const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

fadeElements.forEach((el) => observer.observe(el));

//Hambugger toggle

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('#nav-links a');

if(menuToggle && navLinks){

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

}