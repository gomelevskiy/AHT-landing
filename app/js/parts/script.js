$(document).ready(function() {

  $("input[type='tel']").mask("+7 (999) 999-99-99");

    // Init fullpage script
    $('#fullpage-pol').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11', 'section12', 'section13', 'section14', 'section15'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11', 'section12', 'section13', 'section14', 'section15'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
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
        // normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null
    });

    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
        })
    })();

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
        swipe: false
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
        $("body .section5 .relative .slide-text").text(slideText);
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

});