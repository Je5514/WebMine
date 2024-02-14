
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });
}

function ellipsis(){
  $('.ellipsis').each(function() {
    var $ellipsis = $(this);
    var $parent = $ellipsis.parent();
    var $clone = $ellipsis.clone().css({display: 'inline', width: 'auto', visibility: 'hidden'}).appendTo('body');
    if ($clone.height() > $parent.height()) {
        $ellipsis.addClass('ellipsis-active');
    }
    $clone.remove();
  });
}

menuBurger();
bannerSlider();
ellipsis();

function applyEllipsis() {
  $('.ellipsis').each(function() {
      var $ellipsis = $(this);
      var $parent = $ellipsis.parent();

      // Reset paragraph's height to auto to get its actual height
      $ellipsis.css('height', 'auto');

      // Check if the paragraph's height exceeds the parent's height
      if ($ellipsis.height() > $parent.height()) {
          $ellipsis.addClass('ellipsis-active');
      } else {
          $ellipsis.removeClass('ellipsis-active');
      }

      // Reset paragraph's height to prevent unexpected layout changes
      $ellipsis.css('height', '');
  });
}

$(document).ready(function() {
  applyEllipsis(); // Call the function when the document is ready

  $(window).on('resize', function() {
      applyEllipsis(); // Call the function when the window is resized
  });
});

  
  


  