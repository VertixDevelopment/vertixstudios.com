(function($) {
    $('.mu-testimonial-slide').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        cssEase: 'linear'
    });


    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 300) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });


    jQuery('.scrollToTop').click(function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $('.mu-clients-slider').slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    });



    $('.filtr-container').filterizr();

    //Simple filter controls

    $('.mu-simplefilter li').click(function() {
        $('.mu-simplefilter li').removeClass('active');
        $(this).addClass('active');
    });



    $('.mu-imglink').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });



})(jQuery);