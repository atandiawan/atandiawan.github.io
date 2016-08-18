// Memberikan nilai pada angka yang betul
var angkabetul = Math.floor(Math.random() *10)+1;

//Jumlah kesempatan menebak
var kesempatan = 4;

//Fungsi mencocokan tebakan dan hasil yang betul
var hasil = function (){
	var tebakan = parseInt(document.getElementsByName("angka")[0].value);
	console.log(tebakan);
	
	//Jika masi ada kesempatan, boleh menebak
	if (kesempatan>0){
		if (tebakan === angkabetul){
			alert("Tebakan anda betul");
		} else if (tebakan < angkabetul){
			kesempatan --;
			alert("Jawabannya lebih tinggi dari tebakan anda, Kesempatan anda tinggal: "+ kesempatan);
		} else if (tebakan > angkabetul){
			kesempatan --;
			alert("Jawabannya lebih rendah dari tebakan anda, Kesempatan anda tinggal: "+ kesempatan);
		} else {
			alert("error matching angka")
		}
	//Jika kesempatan habis, tidak boleh lagi menebak
	} else if (kesempatan<=0){
		alert("Kesempatan anda HABIS!!!");
	} else {
		alert("Error dalam kesempatan");
	}
}