let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let interval;

function showSlide(n) {
    let i;
    let images = document.querySelectorAll(".text .animated-img");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Animación de salida
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("enter");
        images[i].classList.add("exit");
    }

    setTimeout(() => {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";

        let currentImage = slides[slideIndex].querySelector(".text .animated-img");
        currentImage.classList.remove("exit");
        currentImage.classList.add("enter");
    }, 1000); // Duración de la animación de salida
}

function currentSlide(n) {
    clearInterval(interval);
    showSlide(slideIndex = n - 1);
    interval = setInterval(() => showSlide(++slideIndex), 3000);
}

function startSlides() {
    showSlide(slideIndex);
    interval = setInterval(() => showSlide(++slideIndex), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    startSlides();
});







document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animated-img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "slideInRight 1s ease-in-out forwards";
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});



//imicio

const container = document.getElementById('auth');
const  registerBtn = document.getElementById('register')
const  loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})