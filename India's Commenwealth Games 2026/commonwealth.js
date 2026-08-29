/* =========================================================
   INDIA IN COMMONWEALTH 2026
   COMMON JAVASCRIPT
   ========================================================= */

$(document).ready(function () {

const menuToggle = $("#menuToggle");
const mobileMenu = $(".mobile-menu");

if (menuToggle.length && mobileMenu.length) {

    menuToggle.on("click", function () {

        mobileMenu.toggleClass("open");

        const isOpen = mobileMenu.hasClass("open");

        menuToggle.attr(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        if (isOpen) {

            menuToggle.attr(
                "aria-label",
                "Close navigation menu"
            );

            menuToggle.html(
                '<i class="fa-solid fa-xmark"></i>'
            );

        } else {

            menuToggle.attr(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.html(
                '<i class="fa-solid fa-bars"></i>'
            );

        }

    });


    mobileMenu.find("a").on("click", function () {

        mobileMenu.removeClass("open");

        menuToggle.attr(
            "aria-expanded",
            "false"
        );

        menuToggle.attr(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.html(
            '<i class="fa-solid fa-bars"></i>'
        );

    });

}


    /* =====================================================
       02. ACTIVE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    if (currentPage !== "") {

        $(".nav-links a, .mobile-menu a").each(
            function () {

                const href =
                    $(this).attr("href");

                if (!href) {
                    return;
                }

                const linkPage =
                    href
                        .split("/")
                        .pop()
                        .toLowerCase();


                if (linkPage === currentPage) {

                    $(this).addClass("active");

                }

            }
        );

    }


    /* =====================================================
       03. NAVBAR SCROLL EFFECT
       ===================================================== */

    const header = $(".header");


    function updateHeader() {

        if ($(window).scrollTop() > 40) {

            header.addClass("scrolled");

        } else {

            header.removeClass("scrolled");

        }

    }


    updateHeader();


    $(window).on(
        "scroll",
        updateHeader
    );


    /* =====================================================
       04. SMOOTH SCROLL
       ===================================================== */

    $('a[href^="#"]').on(
        "click",
        function (event) {

            const target =
                $(this).attr("href");


            if (
                target !== "#" &&
                $(target).length
            ) {

                event.preventDefault();


                $("html, body").animate(
                    {
                        scrollTop:
                            $(target).offset().top - 80
                    },
                    700
                );

            }

        }
    );


    /* =====================================================
       05. SCROLL REVEAL
       ===================================================== */

    const revealElements = $(
        `
        .section-intro,
        .section-heading,
        .section-heading-row,
        .athlete-card,
        .athlete-feature,
        .athlete-feature-grid,
        .athlete-value-card,
        .athlete-values-grid,
        .achievement-card,
        .achievement-feature,
        .achievement-item,
        .gallery-item,
        .gallery-card,
        .journey-card,
        .journey-step,
        .journey-feature,
        .glasgow-stat-card,
        .glasgow-feature-grid,
        .glasgow-value-card,
        .glasgow-link-card,
        .amdavad-overview-card,
        .amdavad-feature,
        .amdavad-value-card,
        .amdavad-values-grid,
        .contact-box
        `
    );


    revealElements.each(
        function () {

            $(this).addClass(
                "reveal-element"
            );

        }
    );


    function revealOnScroll() {

        const windowHeight =
            $(window).height();

        const scrollTop =
            $(window).scrollTop();


        $(".reveal-element").each(
            function () {

                const elementTop =
                    $(this).offset().top;


                if (
                    elementTop <
                    scrollTop +
                    windowHeight -
                    80
                ) {

                    $(this).addClass(
                        "revealed"
                    );

                }

            }
        );

    }


    revealOnScroll();


    $(window).on(
        "scroll",
        revealOnScroll
    );


    /* =====================================================
       06. IMAGE LOADING EFFECT
       ===================================================== */

    $("img").each(
        function () {

            const image =
                $(this);


            image.addClass(
                "image-loading"
            );


            if (this.complete) {

                image.removeClass(
                    "image-loading"
                );

                image.addClass(
                    "image-loaded"
                );

            } else {

                image.on(
                    "load",
                    function () {

                        image.removeClass(
                            "image-loading"
                        );

                        image.addClass(
                            "image-loaded"
                        );

                    }
                );


                image.on(
                    "error",
                    function () {

                        image.removeClass(
                            "image-loading"
                        );

                        image.addClass(
                            "image-error"
                        );

                    }
                );

            }

        }
    );


    /* =====================================================
       07. SCROLL TOP BUTTON
       ===================================================== */

    const scrollTopBtn =
        $("#scrollTopBtn");


    function updateScrollTopButton() {

        if (!scrollTopBtn.length) {
            return;
        }


        if ($(window).scrollTop() > 500) {

            scrollTopBtn.addClass("show");

        } else {

            scrollTopBtn.removeClass("show");

        }

    }


    updateScrollTopButton();


    $(window).on(
        "scroll",
        updateScrollTopButton
    );


    if (scrollTopBtn.length) {

        scrollTopBtn.on(
            "click",
            function () {

                $("html, body").animate(
                    {
                        scrollTop: 0
                    },
                    800
                );

            }
        );

    }


    /* =====================================================
       08. CLOSE MOBILE MENU ON RESIZE
       ===================================================== */

    $(window).on(
        "resize",
        function () {

            if ($(window).width() > 900) {

                mobileMenu.removeClass("open");

                menuToggle.attr(
                    "aria-expanded",
                    "false"
                );

                menuToggle.attr(
                    "aria-label",
                    "Open navigation menu"
                );

                menuToggle.html(
                    '<i class="fa-solid fa-bars"></i>'
                );

            }

        }
    );


    /* =====================================================
       09. HERO IMAGE SAFETY
       ===================================================== */

    $(
        ".hero img, " +
        ".athletes-page-hero img, " +
        ".gallery-hero img, " +
        ".amdavad-hero img"
    ).each(
        function () {

            $(this).css({
                "max-width": "100%",
                "height": "auto"
            });

        }
    );


    /* =====================================================
       10. PREVENT BROKEN IMAGE LAYOUT
       ===================================================== */

    $("img").on(
        "error",
        function () {

            $(this).addClass(
                "broken-image"
            );

        }
    );


    /* =====================================================
       11. FOOTER CURRENT YEAR
       ===================================================== */

    const currentYear =
        new Date().getFullYear();


    $(".current-year").text(
        currentYear
    );


    /* =====================================================
       12. ESC KEY
       CLOSE MOBILE MENU
       ===================================================== */

    $(document).on(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                mobileMenu.removeClass(
                    "open"
                );

                menuToggle.attr(
                    "aria-expanded",
                    "false"
                );

                menuToggle.attr(
                    "aria-label",
                    "Open navigation menu"
                );

                menuToggle.html(
                    '<i class="fa-solid fa-bars"></i>'
                );

            }

        }
    );


    /* =====================================================
       13. ACTIVE LINK HOVER SAFETY
       ===================================================== */

    $(".nav-links a").on(
        "mouseenter",
        function () {

            $(this).addClass(
                "nav-hover"
            );

        }
    );


    $(".nav-links a").on(
        "mouseleave",
        function () {

            $(this).removeClass(
                "nav-hover"
            );

        }
    );


    /* =====================================================
       14. PAGE READY
       ===================================================== */

    $("body").addClass(
        "page-ready"
    );


});