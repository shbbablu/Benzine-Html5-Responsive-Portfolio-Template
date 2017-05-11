/*
Theme Name: Benzine
Author: Md shahadat husen
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen image
    = Text-rotator
    = Sticky Menu
    = Progress Bar
    = Hover effect
    = Shuffle
    = Magnific Popup
    = Countup
    = Tooltip

*/

jQuery(function ($) {

    'use strict';


    // ==============================================
    // Full screen image in hero section
    // ==============================================
    $(document).ready(function () {
        $(".home-img-fh").height($(window).height());

        $(window).resize(function () {
            $(".home-img-fh").height($(window).height());
        });

    });

    // ==============================================
    // text-rotator
    // ==============================================
    $(document).ready(function () {
        $(".rotate").textrotator({
            animation: "fade",
            separator: ",",
            speed: 3000
        });
    });

    // ==============================================
    // Sticky menu
    // ==============================================
    $(document).ready(function () {
        $(".header").sticky({
            topSpacing: 0
        });
        $('body').scrollspy({
            target: '.navbar-inverse',
            offset: 70
        })
    });

    // ==============================================
    // Progress bar
    // ==============================================

    $(document).ready(function () {
        $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'), function () {
                    $(this).css('width', $(this).attr('aria-valuenow') + '%');
                });
                $(this).unbind('inview');
            }
        });
    });

    // ==============================================
    // Hoverdirectory for portfolio section
    // ==============================================
    $(document).ready(function () {

        $(' .btn').each(function () {
            $(this).hoverdir();
        });
        $(' #da-thumbs>li').each(function () {
            $(this).hoverdir();
        });

    });


    // ==============================================
    // shuffle for portfolio section
    // ==============================================

    $(document).ready(function () {

        var $grid = $('#da-thumbs');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        //reshuffle when user clicks a filter item 
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName);
        });
    });

    // ==============================================
    // popup links
    // ==============================================
    $(document).ready(function () {
        $('.test-popup-link').magnificPopup({

            gallery: {
                enabled: true
            },
            removalDelay: 300, // Delay in milliseconds before popup is removed
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            type: 'image'

        });

    });


    // ==============================================
    // counter up
    // ==============================================
    $(document).ready(function () {
        $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

    });


    // ==============================================
    //  Tooltip
    // ==============================================
    $(document).ready(function () {
        $("a").tooltip();
    });

    // ==============================================
    // owl carousel for client or partner section
    // ==============================================
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            nav: false,
            margin: 10,
            loop: true,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 5
                },

                480: {
                    items: 3,
                    margin: 5
                },

                950: {
                    items: 4,
                    margin: 10
                },
                1200: {
                    items: 5,
                    margin: 15
                }
            }

        });
    });

    // ==============================================
    // testimonial section
    // ==============================================
    $(document).ready(function () {
        $('#testimonial-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000
        });
    });
    // ==============================================
    // steller for background scrolling
    // ==============================================

    $(document).ready(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // ==============================================
    // WOW JS
    // ==============================================
    $(document).ready(function () {

        new WOW({

            mobile: false

        }).init();

    });



    // ==============================================
    // Animate scrolling
    // ==============================================
    $(document).ready(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    // ==============================================
    // map setting
    // ==============================================    
    $(document).ready(function () {
        $('#map')
            .gmap3({
                center: [24.908811, 91.9017653],
                zoom: 15,
                scrollwheel: false,
            })
            .bicyclinglayer();
    });

    // ==============================================
    // map toggle setting
    // ==============================================
    $(document).ready(function () {
        $(".map-title h4 span").click(function (e) {
            $("div#map").slideToggle();
            $(".map-title h4 span i").toggleClass("fa-angle-up fa-angle-down");
        });
    });

    /*
     * Contact Form Validation Code
     */
    function checkEmpty(selector) {
        if (selector.val() == "" || selector.val() == selector.prop("placeholder")) {
            selector.addClass('formFieldError', 500);
            return false;
        } else {
            selector.removeClass('formFieldError', 500);
            return true;
        }
    }

    function validateEmail(email) {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (!regex.test(email.val())) {
            email.addClass('formFieldError', 500);
            return false;
        } else {
            email.removeClass('formFieldError', 500);
            return true;
        }
    }

    $('#contact-form').submit(function () {
        var $this = $(this),
            result = true;

        if (!checkEmpty($this.find('#name'))) {
            result = false;
        }
        if (!validateEmail($this.find('#email'))) {
            result = false;
        }
        if (!checkEmpty($this.find('#message'))) {
            result = false;
        }

        if (result == false) {
            return false;
        }

        var $btn = $("#contact-submit").button('loading');

        var data = $this.serialize();

        $.ajax({
            url: "sender.php",
            type: "POST",
            data: data,
            cache: false,
            success: function (html) {
                console.log(html);
                if (html == 1) {
                    $('#result-message').addClass('alert alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Success!</strong> Message Send. We will contact with you soon.').delay(500).slideDown(500).delay(10000).slideUp('slow');

                    $btn.button('reset');

                } else {
                    $('#result-message').addClass('alert alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> Message Sending Error! Please try again').delay(500).slideDown(500).delay(10000).slideUp('slow');
                    $btn.button('reset');
                }
            },
            error: function (a, b) {
                if (b == 'error') {
                    $('#result-message').addClass('alert alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> Message Sending Error! Please try again').delay(500).slideDown(500).delay(10000).slideUp('slow');
                };
                $btn.button('reset');
            }
        });

        return false;
    });

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 200) {
            jQuery("#back-to-top").fadeIn(200);
        } else {
            jQuery("#back-to-top").fadeOut(200);
        }
    });
    jQuery('#back-to-top, .back-to-top').click(function () {
        jQuery('html, body').animate({
            scrollTop: 0
        }, '800');
        return false;
    });
    
    
    $(window).load(function() {
	$('.loading-preloader').delay(500).fadeOut();
	$('#preloader').delay(800).fadeOut('slow');
});


});
