console.log('Hello! Thanks for visiting!');

$.scrollify({
  section: '.full-page',
  scrollbars: false,
  scrollSpeed: 400,
  overflowScroll: true,
  updateHash: false,
  touchScroll: true
});

const handleClick = e => {
  $('.nav__item').removeClass('current');
  $(e.target).addClass('current');
  $.scrollify.move(`#${$(e.target).data('number')}`);
};

$('.nav').on('click', '.nav__item', handleClick);
