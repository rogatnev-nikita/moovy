/*
Template Name:
Author: Rogatnev Nikita
Version: 1.0.0
Tags:
*/

$(document).ready(function() {

    /* ------------------------------------------ */
    /*  MENU OVERLAY & HAMBURGER ICON ACTIVE
    /* ------------------------------------------ */
    $(".main-header__hamburger").click(function() {
        if ($("body").hasClass("modal-open")) {
            $(".modal-backdrop").fadeOut("normal", function() {
                $(this).remove();
            });
            $("body").removeClass('modal-open');
            $(".main-header__hamburger").removeClass('main-header__hamburger--active');
        } else {
            $('<div class="modal-backdrop"></div>').fadeIn().appendTo(document.body);
            $("body").addClass('modal-open');
            $(".main-header__hamburger").addClass('main-header__hamburger--active');
        }
    });


    /* ------------------------------------------ */
    /*  LEGAL COLLAPSE - CHANGE DISPLAY OF THE BUTTON
    /* ------------------------------------------ */
    $(".main-footer__legal-toggle[data-toggle='collapse']").click(function() {
        if ($(this).html() == '<i class="fa fa-chevron-up"></i> HIDE LEGAL') {
            $(this).html('<i class="fa fa-chevron-down"></i> LEGAL');
            $(".main-footer").css("background", "rgba(0, 0, 0, 0)");
        } else {
            $(this).html('<i class="fa fa-chevron-up"></i> HIDE LEGAL');
            $(".main-footer").css("background", "rgba(0, 0, 0, 1)");
        }
    });


    /* ------------------------------------------ */
    /*  MUTE BUTTON
    /* ------------------------------------------ */
    $("video, iframe").prop('muted', false);
    $(".main-footer__icons-volume").click(function() {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(".main-footer__icons-volume").removeClass('fa-volume-off');
            $(".main-footer__icons-volume").addClass('fa-volume-up');
        } else {
            $("video").prop('muted', true);
            $(".main-footer__icons-volume").removeClass('fa-volume-up');
            $(".main-footer__icons-volume").addClass('fa-volume-off');
        }
    });


    /* ------------------------------------------ */
    /*  HOME SLIDER
    /* ------------------------------------------ */
    if ($('body').hasClass('home-page')) {
    var backgrounds = [
        'url(./images/home/home__bg_1.jpg)',
        'url(./images/home/home__bg_2.jpg)',
        'url(./images/home/home__bg_3.jpg)',
        'url(./images/home/home__bg_4.jpg)',
        'url(./images/home/home__bg_5.jpg)',
        'url(./images/home/home__bg_6.jpg)',
        'url(./images/home/home__bg_7.jpg)'
    ];

    $('body').css('background-image', backgrounds[0]);

    $(".main-content__slider-navigation-line:nth-child(1)").click(function() {
        $('body').css('background-image', backgrounds[0]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(1)").addClass('main-content__slider-navigation-line--active');
    });
    $(".main-content__slider-navigation-line:nth-child(2)").click(function() {
        $('body').css('background-image', backgrounds[1]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(2)").addClass('main-content__slider-navigation-line--active');
    });
    $(".main-content__slider-navigation-line:nth-child(3)").click(function() {
        $('body').css('background-image', backgrounds[2]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(3)").addClass('main-content__slider-navigation-line--active');
    });
    $(".main-content__slider-navigation-line:nth-child(4)").click(function() {
        $('body').css('background-image', backgrounds[3]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(4)").addClass('main-content__slider-navigation-line--active');
    });
    $(".main-content__slider-navigation-line:nth-child(5)").click(function() {
        $('body').css('background-image', backgrounds[4]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(5)").addClass('main-content__slider-navigation-line--active');
    });
    $(".main-content__slider-navigation-line:nth-child(6)").click(function() {
        $('body').css('background-image', backgrounds[5]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(6)").addClass('main-content__slider-navigation-line--active');
    });
    $(".main-content__slider-navigation-line:nth-child(7)").click(function() {
        $('body').css('background-image', backgrounds[6]);
        $(".main-content__slider-navigation-line").removeClass('main-content__slider-navigation-line--active');
        $(".main-content__slider-navigation-line:nth-child(7)").addClass('main-content__slider-navigation-line--active');
    });
}



    /* ------------------------------------------ */
    /*  VIDEO ONEPAGE SCROLL
    /* ------------------------------------------ */
$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});










});
