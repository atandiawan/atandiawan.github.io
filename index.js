var gambarhalaman = document.getElementById("ikon");
var background = document.body.style.backgroundColor;
console.log("text");
console.log(background);


var muncul = function (){
	gambarhalaman.innerHTML = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/cdmAEcXpZRk" frameborder="0" allowfullscreen></iframe>';
}

var gantibackground = function(){
	console.log(background);
	document.body.style.backgroundColor = "yellow";
}