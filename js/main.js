var handle = ally.style.focusWithin();

$(function() {

new WOW().init();

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 80 + 'px'
  }, 500);
});

$('[type="tel"]').mask('+7 (999) 999-99-99');

$('.js-menu-btn').click(function() {
  $(this).toggleClass('active');
  $('.nav').toggleClass('nav--active');
});

$('.form__select').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
}).blur(function() {
  $(this).removeClass('active');
});

$('.form__select-item').click(function(e) {
  var text = $(this).text();
  console.log(text);
  $(this).parents('.form__select').find('span').text(text);
});

// Отзывы слайдер
$(".feedback-wrap").owlCarousel({
  responsive: {
    0: {
      margin: 15,
      stagePadding: 30,
      loop: true,
      items: 1,
    },
    768: {
      stagePadding: 0,
      margin: 15,
      items: 2,
      loop: true,
      mouseDrag: true,
    },
    992: {
      loop: false,
      mouseDrag: false,
      stagePadding: 0,
      margin: 30,
      items: 3,
    },
  }
});
});
