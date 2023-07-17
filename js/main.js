var title01 = document.querySelectorAll('.footer__title');
var blocks = document.querySelectorAll('.footer__block');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      item.classList.toggle('active');
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// show content

var btn01 = document.querySelector('.items__btn');
var active01 = document.querySelectorAll('.items3_active');
var items3 = document.querySelectorAll('.items3');


btn01.onclick = () => {
   btn01.textContent = 'Hide content';
   btn01.classList.add('btn2');
   items3.forEach(item => {
      item.classList.toggle('active');
      if(!item.classList.contains('active')){
         btn01.textContent = 'See more recipes';
      }
   });
};

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}

// header

var burger = document.querySelector('.header__burger');
var list01 = document.querySelector('.header2__list');
var main = document.querySelector('.page');
var footer = document.querySelector('.footer');
var body = document.querySelector('body');

burger.onclick = () => {
   list01.classList.toggle('active');
   basket.classList.remove('active');
   body.classList.add('active');
   blocks.forEach(item => {
      item.classList.remove('active');
   });
   title01.forEach(item => {
      item.classList.remove('active');
   });
};
main.onclick = () => {
   list01.classList.remove('active');
   body.classList.remove('active');
};
footer.onclick = () => {
   list01.classList.remove('active');
   body.classList.remove('active');
};

// basket 

var btn02 = document.querySelector('.btn02');
var basket = document.querySelector('.basket');
var close01 = document.querySelector('.basket__close');

btn02.onclick = () => {
   body.classList.add('active');
   basket.classList.add('active');
   list01.classList.remove('active');
   blocks.forEach(item => {
      item.classList.remove('active');
   });
   title01.forEach(item => {
      item.classList.remove('active');
   });
};
close01.onclick = () => {
   basket.classList.remove('active');
   body.classList.remove('active');
};
