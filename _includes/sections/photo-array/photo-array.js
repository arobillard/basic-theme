$('.card-image').on('click', function (e) {
  var imgSource = $(this).attr('data-img');
  var imgOrientation = $(this).attr('data-orientation');
  var imgCaption = $(this).attr('data-caption');

  e.preventDefault();
  $('.photo-focus-wrap').fadeIn();
  $('.photo-focused img').attr('src', imgSource);
  $('.photo-focused img').removeClass('portrait landscape');
  $('.photo-focused img').addClass(imgOrientation);
  $('.photo-focused figcaption').text(imgCaption);
});

$('.photo-focus .close, .photo-focus').on('click', function (e) {
  e.preventDefault();
  $('.photo-focus-wrap').fadeOut();
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    $('.photo-focus-wrap').fadeOut();
  }
});

// e.stopImmediatePropagation();
