document.addEventListener('DOMContentLoaded', function () {
    console.log('Document has loaded.');
});

var test = document.querySelector(".slide");
console.log(test.textContent);

var test = document.querySelectorAll(".slides");
for (var i = 0; i < test.length; i++) {
    console.log(test[i].innerHTML);
}

var $btn = document.getElementById('btnUpdate');
$btn.addEventListener("click", function () {
    console.log('button was clicked');
});

var btnMouseOver = function(){ 
    console.log('mouse over button'); 
}
$btn.addEventListener('mouseover', btnMouseOver);
$btn.removeEventListener('mouseover', btnMouseOver);
