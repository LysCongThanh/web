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

//scroll Nav-bar

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

//slick
$(document).ready(function(){
    $('.tab-content-item').hide()
    $('.tab-content-item:first-child').fadeIn()
    $('.nav-list li').click(function(){
  
        // active nav tab
        // $('.nav-list li').removeClass('active')
        // $(this).addClass('active')
  
        // show tab-content-item
      
        let id_tab_content = $(this).children('.nav-link').attr('href')
        $('.tab-content-item').hide()
        $(id_tab_content).fadeIn()
        return false;
    })
  })

//expanding tab
$(document).ready(function () {
    $('.detail').on('click', function(){
        $(this).toggleClass('open');
        $('.detail-content1').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.close1').click(function(){
        $('.detail-content1').removeClass('open')
    })
})
// detail2
$(document).ready(function () {
    $('.detail2').on('click', function(){
        $(this).toggleClass('open');
        $('.detail-content2').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.close2').click(function(){
        $('.detail-content2').removeClass('open')
    })
})
//detail3
$(document).ready(function () {
    $('.detail3').on('click', function(){
        $(this).toggleClass('open');
        $('.detail-content3').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.close3').click(function(){
        $('.detail-content3').removeClass('open')
    })
})
//bubbly-btn
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-btn-detail");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
//


//aos-data
AOS.init({
    easing: 'ease',
});