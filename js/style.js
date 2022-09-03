
var arrow = document.getElementById('arrow');
var arrow2 = document.getElementById('arrow2');
var block5_text0 = document.getElementById('block5_text0');

function TurnArrow1() {
   arrow.classList.add('turn1');
   block5_text0.classList.add('show');
}

function TurnArrow2() {
   arrow.classList.remove('turn1');
   block5_text0.classList.remove('show');
}



var arrow3 = document.getElementById('arrow3');
var arrow2 = document.getElementById('arrow2');
var block5_text01 = document.getElementById('block5_text01');

function TurnArrow3() {
   arrow3.classList.add('turn1');
   block5_text01.classList.add('show');
}

function TurnArrow4() {
   arrow3.classList.remove('turn1');
   block5_text01.classList.remove('show');
}


var arrow5 = document.getElementById('arrow5');
var arrow6 = document.getElementById('arrow6');
var block5_text02 = document.getElementById('block5_text02');

function TurnArrow5() {
   arrow5.classList.add('turn1');
   block5_text02.classList.add('show');
}

function TurnArrow6() {
   arrow5.classList.remove('turn1');
   block5_text02.classList.remove('show');
}


var arrow7 = document.getElementById('arrow7');
var arrow8 = document.getElementById('arrow8');
var block5_text03 = document.getElementById('block5_text03');

function TurnArrow7() {
   arrow7.classList.add('turn1');
   block5_text03.classList.add('show');
}

function TurnArrow8() {
   arrow7.classList.remove('turn1');
   block5_text03.classList.remove('show');
}


$(document).ready(function(){
   $('.menu_burger').click(function(event) {
      $('.menu_burger,.nav').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
