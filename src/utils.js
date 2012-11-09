// Serialize an object. Convert object to URL string.
Framework.prototype.serializeObject = function(obj, prefix) {

  var str = [];
  for(var p in obj) {
	  var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
	  str.push(typeof v == "object" ?
		  serialize(v, k) :
		  encodeURIComponent(k) + "=" + encodeURIComponent(v));
  }
  return str.join("&");

}

// A very basic extend function.
Framework.prototype.extend = function(obj1, obj2){

	var copyObj = obj2;

	for(i in obj1){
		if(typeof obj1[i] === 'object' && typeof obj1[i] !== 'undefined'){
			copyObj[i] = extend(obj1[i], obj2[i]);
		} else {
			copyObj[i] = obj1[i];
		}
	}

	return copyObj;

}