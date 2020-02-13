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

$('#bannerCarousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  items: 1,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000
})


var previewCarousel;

previewCarousel = $('#previewCarousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  items: 4,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});

previewCarousel.on('changed.owl.carousel', function(e) {
  const currentImage = $('.owl-stage').children()[e.item.index].children[0].src
  $("#mainPreview").css('background-image', 'url(' + currentImage + ')');
});

$("#previewCarousel img").click(function() {
  $("#mainPreview").css('background-image', 'url(' + $(this)[0].src + ')');
});