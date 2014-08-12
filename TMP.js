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

$btn.classList.add('newClass');
$btn.classList.remove('oldClass');
$btn.getAttribute('data-id');

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

['a', 'b', 'c'].forEach(function (entry) {
    console.log(entry);
});

var test = ['a', 'b', 'c'].map(function (entry) {
    return entry.concat('1');
});

// XHR
// Example from https://github.com/jslogger/jslogger-tracker/blob/master/jslogger.js
var createCORSRequest = function(url) {
      var xhr;
      xhr = typeof XMLHttpRequest !== "undefined" ? new XMLHttpRequest() : null;
      if (this.proto !== "https" && xhr && "withCredentials" in xhr) {
        xhr.open("post", url, true);
      } else if (this.proto !== "https" && typeof XDomainRequest !== "undefined") {
        xhr = new XDomainRequest();
        xhr.open("post", url);
      } else {
        xhr = document.createElement("script");
        xhr.type = "text/javascript";
        xhr.src = url;
      }
      return xhr;
};
