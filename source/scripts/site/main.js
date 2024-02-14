
$(window).on('load', function () {
    //page loading
    $('body').addClass('is-loaded');   
    AOS.init();  
}); 

//Browser and OS defined class on body
$('body').addClass($.browser.platform)
$('body').addClass($.browser.name);
if(($.browser.desktop) == true) {
    $('body').removeClass('mobile').removeClass('ipad').addClass('desktop');
}
if(($.browser.mobile) == true) {
    $('body').removeClass('desktop').removeClass('ipad').addClass('mobile');
}
if(($.browser.ipad) == true) {
    $('body').removeClass('mobile').removeClass('desktop').addClass('ipad');
}
if((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad') {
    $('body').removeClass('mobile').removeClass('desktop').addClass('ipad');
}

// Menu burger
function menuBurger(){
  if($('.header__burger').length >0){
    $('.jsBurger').on('click', function(){
      $(this).toggleClass('is-open');
      $('nav').toggleClass('is-open');
    })
  }
}

function bannerSlider(){
  $('.jsSlider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    easing: 'linear',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/next.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="prev"></button>',
  });
}

menuBurger();
bannerSlider();

  
  


  