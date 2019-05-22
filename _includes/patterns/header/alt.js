// Escape Close Nav

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    $('.masthead').removeClass('nav-open');
  }
});
