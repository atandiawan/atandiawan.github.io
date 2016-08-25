var match = document.getElementsByClassName("match");
var display = function(){
	for (i=0; i<=(((match.length)/2)-1); i++){
		if(match[i*2].checked){
			selection = match[i*2].value;
		} else {
			selection = match[i*2+1].value;
		}
		document.getElementById("yourselection").innerHTML = document.getElementById("yourselection").innerHTML + "<p>Between " + match[i*2].value + " and " + match[i*2+1].value + ", You pick <b>" + selection + "</b></p><br>";
	}
	document.getElementById("button").disabled ="true";
	document.getElementById("button").value = "Done";
}

//document.getElementById("yourselection").innerHTML = document.getElementById("yourselection").innerHTML + "<p>Between " + match[i].value + " and " + match[i+1].value ", You pick <b>" + selection + "</b></p><br>";