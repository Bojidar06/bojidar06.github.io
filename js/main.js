(function ($) {
    "use strict";


    
    /*
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };
    spinner();
    */



        // Wait for the page to fully load
        window.onload = function () {
                $('#spinner').removeClass('show');
        };

    
    

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 400, 'easeInOutExpo');
        return false;
    });



    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2500
    });


    
})(jQuery);


const NavLinkEls = document.querySelectorAll('.nav-link');
const Togler = document.getElementById('togler');
const Colaps = document.getElementById('navbarCollapse');
const Logo = document.getElementById('logoto');



NavLinkEls.forEach(NavLinkEl => {
    NavLinkEl.addEventListener('click', () => {
        if(!(Togler.classList.contains('collapsed'))){
        Togler.click();
        }
    });
});

Logo.addEventListener('click', () => {
    if(!(Togler.classList.contains('collapsed'))){
        Togler.click();
    }
});

window.addEventListener('scroll', () => {
    if(!(Togler.classList.contains('collapsed'))){
        Togler.click();
    }
});


