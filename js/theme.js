// On load

if ($(this).scrollTop() < 50) {
  $('.masthead').removeClass('sticky')
}

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
  $('.notifications').removeClass('notifications-open');
});


// var my_json = $.getJSON('./theme2.json', function(json) {
//   my_json = json;
// });
//
//
// console.log(my_json)
