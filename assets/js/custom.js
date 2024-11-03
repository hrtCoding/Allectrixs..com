(function ($) {
    "use strict";

    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area .main-nav").addClass("sticky");
        } else {
            $(".navbar-area .main-nav").removeClass("sticky");
        }
    });

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

    // popup button
    $('.popup-button').click(function () {
        $('.popup').css('visibility', 'visible');
        $('.popup-content').addClass('hi');
    })
    $('#popup-close').click(function () {
        $('.popup').css('visibility', 'hidden');
        $('.popup-content').removeClass('hi');
    })

    $(".banner-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        loop: true,
        autoplay: true,
        dots: true,
        dotsData: true,
        nav: false,
        items: 1,
    });

    $(".testimonial-card-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1,
    });

    $(".testimonial-slider-area-2").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        items: 1,
    });

    $(".testimonial-slider-area-3").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
        items: 1,
    });

    $(".service-card-slider").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        },
    });

    $(".brands-slider").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        dots: false,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 6,
            }
        },
    });

    $(".video-popup").magnificPopup({
        type: "iframe",
    });

    // language select
    $(".language-select select").niceSelect();

    // number input
    $('input[type="number"]').niceNumber();


    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 0);
        });
    });

    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }

})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();