var header = document.querySelector('.header');

header.style.background = "#451818";
header.style.padding = "20px 0";

var header_rows = document.querySelector('.header_rows');

header_rows.style.display = "flex";
header_rows.style.alignItems = "center";
header_rows.style.justifyContent = "space-between";

var head_list = document.querySelector('.head_list');

head_list.style.display = "flex";
head_list.style.alignItems = "center";


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

