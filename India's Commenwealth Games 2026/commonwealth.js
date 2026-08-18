/* =====================================================
   INDIA IN COMMONWEALTH 2026
   DAY 3 JAVASCRIPT
===================================================== */


/* -----------------------------------------------
   WEBSITE LOAD MESSAGE
------------------------------------------------ */

console.log(
    "India in Commonwealth 2026 website loaded successfully."
);


/* -----------------------------------------------
   CONTACT FORM
------------------------------------------------ */

const contactForm = document.querySelector("form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for connecting with India in Commonwealth 2026!"
        );

    });

}