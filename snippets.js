// Transform document.cookie string into object
document.cookie.split(";").reduce((acc, cookieStr) => {
  let cookieArr = cookieStr.split("=", 2).map((val) => val.trim());
  acc[cookieArr[0]] = cookieArr[1];
  return acc;
}, {});

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

let a = document.createElement("div"); 
a.innerHTML = '<script>var = "a";</script>';
console.log(a.innerText);

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

// Iteration through arrays and objects. Compatible with IE.
// Example from formToObject.js
function forEach( arr, callback ){

	if([].forEach){
		return [].forEach.call(arr, callback);
	}

	var i;
	for(i in arr){
		// Using Object.prototype.hasOwnProperty instead of
		// arr.hasOwnProperty for IE8 compatibility.
		if( Object.prototype.hasOwnProperty.call(arr,i) ){
			callback.call(arr, arr[i]);
		}
	}

	return;

}

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


// Canvas utilities.
// Example from http://tympanus.net/Development/AnimatedHeaderBackgrounds/js/demo-1.js
function Circle(pos,rad,color) {
    var _this = this;

    // constructor
    (function() {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
    })();

    this.draw = function() {
        if(!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
        ctx.fill();
    };
}

// Util
function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

// Module pattern (class like)
(function (Module) {
    
    Module.Person = function (name) {
        // constructor
        this.name = name;
    };
    
    Module.Person.prototype.constructor = Module.Person;
    
    // private method
    var _privateMethod = function() {
        // whatever bro
    };
        
    // public method
    Module.Person.prototype.speak = function() {
        console.log("Hello there, I'm " + this.name);
    };
    
    return Module;
    
})(window.Module = window.Module || {});

var anth = new Module.Person("Anthony").speak();

// Generate UUIDs.
function UUIDcreatePart(length) {
    var uuidpart = "";
    for (var i=0; i<length; i++) {
        var uuidchar = parseInt((Math.random() * 256), 10).toString(16);
        if (uuidchar.length == 1) {
            uuidchar = "0" + uuidchar;
        }
        uuidpart += uuidchar;
    }
    return uuidpart;
}


// Extend object literals only.
function extendDeep() {
  'use strict';
  var destination = arguments[0];
  var sources = Array.prototype.slice.call(arguments, [1]);

  if (sources.length === 0) {
    return destination;
  }

  var i;
  sources.forEach(function(source) {
    for (i in source) {
      if (source.hasOwnProperty(i)) {
        if (destination[i] && typeof destination[i] === 'object' && Object.keys(destination[i]).length) {
          extendDeep(destination[i], source[i]);
        } else {
          destination[i] = source[i];
        }
      }
    }
  });


  return destination;
};

  function dragElem(elem, xAmount, yAmount) {
    const x = elem.getBoundingClientRect().width * xAmount;
    const y = elem.getBoundingClientRect().height * yAmount;

    elem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    elem.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: x, clientY: y }));
    elem.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
  }

// promisify condition
a = new Promise((resolve, reject) => {
  let a = 0;
  const i = setInterval(() => {
    console.log(a);
    if (a === 10) {
        clearInterval(i);
    	resolve(a);
    }
	a++;
  }, 16);
}).then((r) => console.log("Response", r));
