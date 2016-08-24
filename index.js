var gambarhalaman = document.getElementById("ikon");

var muncul = function (){
	gambarhalaman.innerHTML = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/cdmAEcXpZRk" frameborder="0" allowfullscreen></iframe>';
}

var gantibackground = function(){
	document.body.style.backgroundColor = "yellow";
}

$(document).ready(function(){
	$("img").click(function(){
		$(this).fadeOut();
	});
});

var gambar = $("img");
console.log(gambar);