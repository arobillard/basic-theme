$('.nav .icon-link').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $(this).siblings('.dropdown').toggleClass('open');
  console.log('sexy');
});

var x = window.matchMedia("(min-width: 38em)")
noFocus(x) // Call listener function at run time
x.addListener(noFocus) // Attach listener function on state changes

function noFocus(x) {
  if (x.matches) {

    $('.m-no-focus').attr('tabindex', '-1');
    console.log('woot');

    $('.has-dropdown > a').focus(function() {
      $(this).siblings('.dropdown').addClass('open');
      console.log('time');
    });

    $('.has-dropdown > a').focusout(function() {
      $(this).siblings('.dropdown').removeClass('open');
      console.log('for');
    });

    $('.dropdown a').focus(function() {
      $(this).parent().parent().addClass('open');
      console.log('every');
    });

    $('.dropdown a').focusout(function() {
      $(this).parent().parent().removeClass('open');
      console.log('one');
    });

  }
}
