var color = ["red","green","yellow", "blue", "#77FF77", "red"];
var word = document.getElementsByClassName("word");
console.log(word);
var ubahwarna = function(){
	for (i=0; i<=5; i++){
		word[i].style.color = color[i];
	}
}