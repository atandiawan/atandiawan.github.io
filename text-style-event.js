var tulisan = document.getElementsByTagName("p");
console.log(tulisan);

var makebold = function (){
	tulisan[0].style.fontWeight = "900";
}

var makeitalic = function (){
	tulisan[0].style.fontStyle = "italic";
}

var makered = function (){
	tulisan[0].style.color = "red";
}