// // menu
const menuBtn = document.querySelector('.menu')
let menuOpen = false
$(document).ready(function () {
    $('.menu').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        menuBtn.classList.remove('open')
        menuOpen = false
    });
    AOS.init({
        easing: 'ease',
        duration:2000
    });
});
