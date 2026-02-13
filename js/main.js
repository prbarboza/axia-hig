(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $('.header-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    dots: true,            // 🟢 Habilitado na raiz para o JS rastrear a mudança
    autoplay: true,
    autoplayTimeout: 2500, 
    autoplaySpeed: 600,    
    smartSpeed: 600,
    navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ],
    responsive: {
        0: {          // MOBILE
            nav: false,
            dots: true  // Exibe no mobile
        },
        768: {        // DESKTOP
            nav: true,
            dots: false // Esconde no desktop (como você configurou)
        }
    }
});



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    $(document).ready(function () {
    console.log("Script carregado!"); // Veja se aparece no console (F12)

    if ($(window).width() < 992) {
        $("#premium-carousel").owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            autoplay: true,
            stagePadding: 50, // O segredo para ver o próximo card
            responsive: {
                0: { items: 1 },
                768: { items: 2 }
            }
        });
    } else {
        // Remove as classes do Owl no desktop para manter as 4 colunas do Grid
        $("#premium-carousel").removeClass('owl-carousel');
    }
});
    
})(jQuery);

