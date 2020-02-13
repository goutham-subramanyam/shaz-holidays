if($('.navbar').length) {
  var menu = $('.navbar');
  var origOffsetY = menu.offset().top;

  function scroll() {
      if ($(window).scrollTop() > origOffsetY) {
          $('.navbar').addClass('navbar-fixed');
      } else {
          $('.navbar').removeClass('navbar-fixed');
      }
  }
  document.onscroll = scroll;
}

handleDesc = () => {
  $('.sh-link.d-md-none').removeClass('d-inline-block');
  $('.sh-link.d-md-none').addClass('d-none');
  $("#shPlaceDescription").removeClass('d-none d-sm-none');
  $("#shPlaceDescription").addClass('mt--lg');
}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  items: 1,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000
})