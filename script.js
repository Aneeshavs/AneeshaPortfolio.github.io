/* Navigation Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Show Menu */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}

/* Hide Menu */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

/* Remove Mobile Menu on Link Click */
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* Scroll Up Button */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(window.scrollY >= 560){
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove('show');
    }
}
window.addEventListener('scroll', scrollUp);

/* Theme Toggle */
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const icon = themeSwitch.querySelector('i');

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    // Save the theme preference in localStorage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Load the saved theme preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme && savedTheme === 'dark'){
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

/* Initialize AOS (Animate On Scroll) */
AOS.init({
    duration: 1000,
    once: true,
});
