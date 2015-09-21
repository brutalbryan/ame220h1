var boxStatus = [];
var easingTypes = ["swing", "easeInQuad", "easeOutQuad", 
					"easeInOutQuad", "easeInCubic", "easeOutCubic", 
					"easeInOutCubic", "easeInQuart", "easeOutQuart", 
					"easeInOutQuart", "easeInQuint", "easeOutQuint", 
					"easeInOutQuint", "easeInSine", "easeOutSine", 
					"easeInOutSine", "easeInExpo", "easeOutExpo", 
					"easeInOutExpo", "easeInCirc", "easeOutCirc", 
					"easeInOutCirc", "easeInElastic", "easeOutElastic",
					"easeInOutElastic", "easeInBack", "easeOutBack", 
					"easeInOutBack", "easeInBounce", "easeOutBounce"];


	

var createButton = function(){
	var outS = "";
	for(var i = 0; i < easingTypes.length; i++){
		outS += "<a class='button' id='button"+ i + "' href='javascript:buttonClicked(" + i + ")'>" + easingTypes[i] + "</a>"
	}
	console.log(outS)
	document.getElementsByTagName("body")[0].innerHTML = outS;
	

	for (var i = 0; i <= easingTypes.length ; i++ ) {
		boxStatus[i] = "left";
	}
}

var buttonClicked = function(n)
{
	var id = '#button' + n.toString();
	var width = $("body").width();
	var widthBox = 150;
	if(boxStatus[n] == "left"){
		$(id).animate({"margin-left": width - widthBox + "px"}, 1000, easingTypes[n]);
		boxStatus[n] = "right";
	}	
	else{
		$(id).animate({"margin-left": "0px"}, 1000, easingTypes[n]);
		boxStatus[n] = "left";
	}
}

