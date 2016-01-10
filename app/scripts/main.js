$(document).ready(function() {

  //hero scroll
  function smoothScrollTo(services) {
    $('html, body').animate({
      scrollTop: ($(services).offset().top)
    }, 1000);
    return false;
  }

  $('#pointer-wrapper').click(function() {
    smoothScrollTo($('#services'));
  });


  //back to bottom scroll
  var scrollDuration = 1250;

  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0}, scrollDuration);
  })

});

//particles
particlesJS();
