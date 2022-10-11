function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

console.log(isObject(Object.create(null))); // true
console.log(isObject({})); // true
console.log(isObject([])); // false
console.log(isObject(null)); // false
console.log(isObject()); // false
console.log(isObject("")); // false
console.log(isObject(function() {})); // false
console.log(isObject(1)); // false
console.log(isObject(NaN)); // false