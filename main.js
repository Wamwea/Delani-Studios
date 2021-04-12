$(document).ready(function() {
    $('.scroll-down').on('click', function(e) {
      $('html, body, #hero').animate({ scrollTop: $('#about-us').offset().top}, 500, 'linear');
    });
  });