$('.has-dropdown > a').focus(function() {
  $(this).siblings('.dropdown').addClass('open');
});

$('.has-dropdown > a').focusout(function() {
  $(this).siblings('.dropdown').removeClass('open');
});

$('.dropdown a').focus(function() {
  $(this).parent().parent().addClass('open');
});

$('.dropdown a').focusout(function() {
  $(this).parent().parent().removeClass('open');
});
