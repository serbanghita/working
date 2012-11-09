// Basic ajax method
//
// @ref:	https://gist.github.com/1704526
// @ref:	https://github.com/jquery/jquery/blob/master/src/ajax.js
//
// @usage:	f.ajax('index.php?page=chat', {type: 'post', data: {}, dataType: 'json', success: function(r){ console.log(r); } });

Framework.prototype.ajax = function(url, options){

	// defaults
	if(!options || !options.type){
		options.type = 'GET';
	} else {
		options.type = options.type.toUpperCase();
	}

	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MicrosoftXMLHTTP");

	xhr.onreadystatechange = function(){

	  if(this.readyState == 4 && this.status == 200){

		switch(options.dataType){
			case 'json':
				var r = JSON.parse(this.responseText); // @todo: cross-browser.
			break;
			case 'html':
			default:
				var r = this.responseText;
			break;
		}

		options.success(r);

	  }

	}

	xhr.open(options.type.toUpperCase(), url, true);
	if(options.type=='POST'){
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}
	xhr.send(typeof options.data !== 'undefined' ? serializeObject(options.data) : null);

	return xhr;

}