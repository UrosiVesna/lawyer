

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

//form-validator

if ($('.contact-form').length > 0) {

        $('.contact-form').validate({

            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'The Name* field is required'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                message: {
                    required: 'The Message* field is required'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }




        });

    }


});


