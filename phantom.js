var page = require('webpage').create();
var system = require('system');
var args = system.args[1];
var resultName;

var url = 'https://www.arayanibil.com/numara-sorgulama/'+args+'/';

//page.viewportSize = { width: 1920, height: 1080 };

page.open(url, function(status) {

  //console.log("Status: " + status);
  
  
  
  if(status === "success") {

	resultName = page.evaluate(function(){
		
		if  (document.getElementsByClassName('media-body p-l-10 va-mid')[0] == null){
			return 'Kayıt Bulunamadı';
		}
		else {
			return document.getElementsByClassName('media-body p-l-10 va-mid')[0].innerHTML.trim();
		}
		
	});

	console.log(resultName);
	
	phantom.exit();

  }

});


