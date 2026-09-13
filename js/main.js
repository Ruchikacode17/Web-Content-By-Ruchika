// =====================================================
// AERONIVA - MAIN JAVASCRIPT
// Common functions used across the website
// =====================================================


// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        // Open / close mobile navigation
        mainNav.classList.toggle("open");

        // Check current menu status
        const isOpen = mainNav.classList.contains("open");

        // Update accessibility attribute
        menuToggle.setAttribute("aria-expanded", isOpen);

        // Change hamburger icon
        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (isOpen) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });


    // Close mobile menu after clicking a navigation link
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}


// =====================================================
// BACK TO TOP BUTTON
// =====================================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    // Show button after scrolling down
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });


    // Scroll smoothly to the top
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =====================================================
// HOME ENERGY JOURNEY SLIDER
// =====================================================

const energySlides = document.querySelectorAll(".energy-slide");
const sliderDots = document.querySelectorAll(".slider-dot");
const previousSlide = document.getElementById("previousSlide");
const nextSlide = document.getElementById("nextSlide");

let currentSlide = 0;


// -----------------------------------------------------
// SHOW SLIDE
// -----------------------------------------------------

function showEnergySlide(slideNumber) {

    if (energySlides.length === 0) {
        return;
    }


    // Keep slide number within available range
    if (slideNumber >= energySlides.length) {
        currentSlide = 0;
    } else if (slideNumber < 0) {
        currentSlide = energySlides.length - 1;
    } else {
        currentSlide = slideNumber;
    }


    // Hide all slides
    energySlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    // Remove active state from all dots
    sliderDots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    // Show selected slide
    energySlides[currentSlide].classList.add("active");


    // Activate matching dot
    if (sliderDots[currentSlide]) {

        sliderDots[currentSlide].classList.add("active");

    }

}


// -----------------------------------------------------
// NEXT BUTTON
// -----------------------------------------------------

if (nextSlide) {

    nextSlide.addEventListener("click", function () {

        showEnergySlide(currentSlide + 1);

    });

}


// -----------------------------------------------------
// PREVIOUS BUTTON
// -----------------------------------------------------

if (previousSlide) {

    previousSlide.addEventListener("click", function () {

        showEnergySlide(currentSlide - 1);

    });

}


// -----------------------------------------------------
// DOT NAVIGATION
// -----------------------------------------------------

sliderDots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        showEnergySlide(index);

    });

});


// =====================================================
// AERONIVA MAIN JS COMPLETE
// =====================================================