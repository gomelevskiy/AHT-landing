// Header on mobile device
var headerNav = $(".header");
var mobileBtn = $(".mobile-button");
$(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
        headerNav.addClass("fixed-bar");
        mobileBtn.addClass("fixed-bar");
    }
    else {
        headerNav.removeClass("fixed-bar");
        mobileBtn.removeClass("fixed-bar");
    }
});

$(document).ready(function() {

    // Mobile mask
  $("input[type='tel']").mask("+7 (999) 999-99-99");

    // Init fullpage script
    $('#fullpage-pol').fullpage({
        // Navigation
        menu: '#modalMenu',
        lockAnchors: false,
        anchors:['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'block7', 'block8', 'block9', 'block10', 'block11', 'block12', 'block13', 'block14', 'block15'],
        navigation: false,
        navigationPosition: 'left',
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 0,
        normalScrollElementTouchThreshold: 0,
        bigSectionsDestination: null,
        responsiveWidth: 1025
    });

    // Menu btn
    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
            $('.modal-menu').toggleClass('show');
            if( $(".modal-menu").hasClass("show") ) {
                $(".header .btn-navigation span.feedback-on").hide();
            }else {
                $(".header .btn-navigation span.feedback-on").show();
            }
        });
    })();

    //Close menu after click menu selectors
    $(function () {
        $('.scrollto').click(function () {
            $('.header .btn-navigation .hamburger-menu').trigger("click");
        });
    });

    // Carousel flags
    $(".carousel-flag").owlCarousel({
        items: 1,
        autoWidth: false,
        navText: ["",""],
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000
    });

    var slideBackground;
    var slideText;
    var slideTextSmall;

    // Fotorama on section5
    $('document .fotorama__nav-wrap .fotorama__nav--thumbs').attr("width","600px");
    $('.fotorama').fotorama({
        maxwidth: '100%',
        width: '100%',
        nav: 'thumbs',
        fit: 'cover',
        thumbfit: 'cover',
        thumbwidth: 90,
        thumbheight: 90,
        thumbborderwidth: 3,
        thumbmargin: 55,
        transition: 'dissolve',
        swipe: true
    }).on('fotorama:ready', function (e, fotorama) {

        slideBackground = "background-image: url('"+ fotorama.activeFrame.img +"');";
        slideText = fotorama.activeFrame.html.children[0].innerHTML;
        slideTextSmall = fotorama.activeFrame.html.children[1].innerHTML;

        $("body .section5 .fotorama").attr("style", slideBackground);
        $("body .section5 .relative .slide-text").text(slideText);
        $("body .section5 .relative .slide-text-small").text(slideTextSmall);

    }).on('fotorama:show', function (e, fotorama) {

        slideBackground = "background-image: url('"+ fotorama.activeFrame.img +"');";
        slideText = fotorama.activeFrame.html.children[0].innerHTML;
        slideTextSmall = fotorama.activeFrame.html.children[1].innerHTML;

        $("body .section5 .fotorama").attr("style", slideBackground);
        $("body .section5 .relative .custom-h1").text(slideText);
        $("body .section5 .relative .slide-text-small").text(slideTextSmall);

    });

    // Input as material design
    $('.section15-box__input').blur(function(){
        if($(this).val().length !== 0) {
            $(this).addClass('filled');
        }
        else {
            $(this).removeClass('filled');
        }
    });

    // Show modal
    $(".feedback-on").click(function() {
       $(".modal-feedback").addClass("show");
    });

    // Show all elements section two
    $(".show-all-elements").click(function() {
        $(".modal-view-all-elements").addClass("show");
    });

    // Close modals
    $(".close-feedback").click(function() {
        $(this).parent().parent().removeClass("show");
    });

    // Close and view navigation after scroll
    $('.header').scrollupbar().isInViewport;

});