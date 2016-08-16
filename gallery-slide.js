var gambar = ["http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254","https://usatftw.files.wordpress.com/2016/02/kobeeee.jpg?w=1000&h=600&crop=1","https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg","http://s3-us-west-2.amazonaws.com/hypebeast-wordpress/image/2015/12/kobe-bryant-christmas-0.jpg"];
var currentimage = document.getElementById("myImg");
var currentindex = 0;

var previous = function(){
	if(currentindex === 0){
		alert("This is the first image");
	}else{
		currentindex --;
		currentimage.src = gambar[currentindex];
		refresh(currentimage);
		console.log(currentimage);
	}
}

var next = function(){
	if(currentindex >= gambar.length-1){
		alert("This is the last image");
	}else{
		currentindex ++;
		currentimage.src = gambar[currentindex];
		refresh(currentimage);
		console.log(currentimage);
	}
}