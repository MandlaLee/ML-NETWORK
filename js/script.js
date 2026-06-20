/* =====================================
   ML NETWORK
   Shaka's Adventure
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       WAITLIST FORM
    ========================== */

    const waitlistForm = document.getElementById("waitlistForm");
    const successMessage = document.getElementById("successMessage");

    if (waitlistForm) {

        waitlistForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const nameField = waitlistForm.querySelector(
                'input[type="text"]'
            );

            const name = nameField
                ? nameField.value
                : "Adventurer";

            if (successMessage) {

                successMessage.textContent =
                    `Thank you ${name}! You've joined the Shaka's Adventure waiting list.`;

                successMessage.style.display = "block";

            }

            waitlistForm.reset();

        });

    }

    /* ==========================
       HEADER SCROLL EFFECT
    ========================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.style.background =
                    "rgba(5,12,22,.98)";

            } else {

                header.style.background =
                    "rgba(8,17,31,.92)";

            }

        });

    }

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId.length <= 1
                ) return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

    /* ==========================
       FADE IN ANIMATION
    ========================== */

    const fadeElements =
        document.querySelectorAll(
            ".feature-section, .showcase, .form-box, .section-heading"
        );

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    fadeElements.forEach(element => {

        element.classList.add("fade-up");

        observer.observe(element);

    });

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle(
                "mobile-active"
            );

        });

    }

});


/* =====================================
   HERO PARALLAX
===================================== */

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset =
        window.pageYOffset;

    heroImage.style.transform =
        `translateY(${offset * 0.15}px)`;

});
