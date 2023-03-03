

$(document).ready(function () {


    function animation() {

        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
            }
        });
    }

    $(window).scroll(function () {
        animation();
    });

    animation();


    //owl Carousel
    
if($('.team-members-slider').length > 0)
    $(document).ready(function () {
        $(".team-members-slider").owlCarousel({
            
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items: 1,
                    margin: 0
                },
                992: {
                    items: 2,
                    margin: 12
                }
            }
        });
    });

});


