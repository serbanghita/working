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

$btn.id
$btn.classList
$btn.textContent
$btn.parentNode

var $notice = document.createElement("div");
$notice.innerHTML = '<b>Like a bawsz!</b>';
document.body.appendChild($notice);

var $articles = document.querySelector('.articles'); 
var $article = document.createElement('article'); 
$article.innerHTML = 'Article content'; 
$articles.insertBefore($article);

$test.addEventListener('click', function (e) {
    e.target.parentNode;
    e.target.children;
    e.target.previousElementSibling;
    e.target.nextElementSibling;
});

Array.prototype.filter.call($elements, function(elem){
    return true; // return false;
});
