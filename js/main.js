var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.page1__menu');
var path1 = document.querySelector('.path1');
var numbers = document.querySelector('.page4__numbers');
var number = document.querySelectorAll('.page4__number');
var items1 = document.querySelector('.items1');
var items2 = document.querySelector('.items2');
var items2 = document.querySelector('.items2');
var page01 = document.querySelector('.page01');

var number1 = document.querySelector('.number1');
var number2 = document.querySelector('.number2');
var number3 = document.querySelector('.number3');
var body41 = document.querySelector('.body41');
var body42 = document.querySelector('.body42');
var body43 = document.querySelector('.body43');
var item011 = document.querySelector('.item011');
var item012 = document.querySelector('.item012');

var arrow = document.querySelector('.arrow');
var arrow1 = document.querySelector('.arrow1');
var productContainers = [...document.querySelectorAll('.block')];
var nxtBtn = [...document.querySelectorAll('.arrow')];
var productContainers1 = [...document.querySelectorAll('.block1')];
var nxtBtn1 = [...document.querySelectorAll('.arrow1')];


burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   path1.classList.toggle('active');
   arrow.classList.toggle('none');
});




number.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
         number.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active');
    });
});

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        arrow.classList.toggle('active');
        items2.classList.remove('active');
        items1.classList.add('active');
        if(arrow.classList.contains('active')) {
         item.scrollLeft -= containerWidth;
         items1.classList.remove('active');
         items2.classList.add('active');
      }
    });
});

productContainers1.forEach((item, i) => {
   let containerDimensions = item.getBoundingClientRect();
   let containerWidth = containerDimensions.width;

   nxtBtn1[i].addEventListener('click', () => {
       item.scrollLeft += containerWidth;
       arrow1.classList.toggle('active');
       item011.classList.add('active');
       item012.classList.remove('active');
       if(arrow1.classList.contains('active')) {
        item.scrollLeft -= containerWidth;
        item011.classList.remove('active');
        item012.classList.add('active');
     }
   });
});



number1.addEventListener('click', ()=> {
   body41.classList.remove('haid');
   body42.classList.remove('active');
   body43.classList.remove('active');
});
number2.addEventListener('click', ()=> {
   body42.classList.add('active');
   body41.classList.add('haid');
   body43.classList.remove('active');
});
number3.addEventListener('click', ()=> {
   body43.classList.add('active');
   body41.classList.add('haid');
   body42.classList.remove('active');
});

function consoleBG() {
   if ($(window).scrollTop() == 0) {
     $('.header__burger').removeClass('active2');
     $('.path1').removeClass('active2');
   } else {
     $('.header__burger').addClass('active2');
     $('.path1').addClass('active2');
   }
 }
 consoleBG();
 
 $(window).scroll(function() {
   consoleBG();
 });