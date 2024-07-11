$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,  
        loop: true,
        margin: 5,     
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        responsive: {
            0: {
                items: 1 
            },
            480: {
                items: 1  
            },
            600: {
                items: 2   
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    // Sync the dots with the carousel
    $(".owl-carousel").on('changed.owl.carousel', function(event) {
        var index = event.item.index;
        $(".dot").removeClass("active");
        $(".dot").eq(index).addClass("active");
    });

    $(".dot").click(function(){
        var index = $(this).index();
        $(".owl-carousel").trigger('to.owl.carousel', [index, 300]);
    });
});
// script Language Button
document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.querySelector('.language-button');
    const languageSelector = document.querySelector('.language-selector');

    languageButton.addEventListener('click', function() {
        languageSelector.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!languageSelector.contains(event.target)) {
            languageSelector.classList.remove('open');
        }
    });
});
// promo animation owl
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });

    // Animate text on load
    $('.promo .right h1, .promo .right .text').css({
        'opacity': '1',
        'transform': 'translateX(0)'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navbarList = document.querySelector('.navbar .list');
    var languageSelector = document.querySelector('.language-selector');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('open');
        navbarList.classList.toggle('open');
        languageSelector.classList.toggle('open');
    });
});
new WOW().init();