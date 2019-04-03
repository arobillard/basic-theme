// On load

// Sticky Nav

// $(function() {
//    $(window).scroll(function () {
//       if ($(this).scrollTop() > 50) {
//         $('.masthead').addClass('sticky')
//       }
//       if ($(this).scrollTop() < 50) {
//         $('.masthead').removeClass('sticky')
//       }
//    });
// });

// Toggle Nav

$('.tog-nav').on('click', function (e) {
  e.preventDefault();
  $('.masthead').toggleClass('nav-open');
});


// var my_json = $.getJSON('./theme2.json', function(json) {
//   my_json = json;
// });
//
//
// console.log(my_json)

$('.nav .icon-link').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $(this).siblings('.dropdown').toggleClass('open');
});

var x = window.matchMedia("(min-width: 38em)")
noFocus(x) // Call listener function at run time
x.addListener(noFocus) // Attach listener function on state changes

function noFocus(x) {
  if (x.matches) {
    $('.m-no-focus').attr('tabindex', '-1');
    console.log('woot');
  }
}
