var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');
var item = document.querySelectorAll('.menu__item');

function show() {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   item.forEach(elem => {
      elem.classList.toggle('active');
   });
}

burger.onclick = show;

// next

var play = document.querySelector('.kion__img2');
var img = document.querySelector('.kion__img1');

function play0() {
   play.classList.toggle('active');
   img.classList.toggle('active');
}

play.onclick = play0;

// next

$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });