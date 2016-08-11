//pengguna memilih move yang akan dijalankan
var pilihanPengguna = function(){
  return prompt("Masukan Jari");
}

//computer memilih dengan random angka kemudian diassign ke move
var pilihanLawan = function(){
  x = Math.random(0,1);
  if (x>=0 && x<0.34){
    return "telunjuk";
  }else if (x>=0.34 && x<0.67){
    return "jempol";
  }else if (x>=0.67 && x<1){
    return "kelingking"
  }else {
    console.log("error");
  }
}

var pengguna = pilihanPengguna();

var lawan = pilihanLawan();

var bertarung = function (pengguna, lawan){  
  switch (pengguna){
    case "telunjuk":
      switch (lawan){
        case "telunjuk":
          return "seri";
          break;
        case "jempol":
          return "Komputer";
          break;
        case "kelingking":
          return "Pengguna";
          break;
        default:
          console.log("error lawan");
      }
    break;
    case "jempol":
      switch (lawan){
        case "telunjuk":
          return "Pengguna";
          break;
        case "jempol":
          return "seri";
          break;
        case "kelingking":
          return "Komputer";
          break;
        default:
          console.log("error lawan");
      }
    break;
    case "kelingking":
      switch (lawan){
        case "telunjuk":
          return "Komputer";
          break;
        case "jempol":
          return "Pengguna";
          break;
        case "kelingking":
          return "seri";
          break;
        default:
          console.log("error lawan");
      }
    break;
    default:
      console.log("error pengguna");          
  }
}

var hasil = bertarung(pengguna, lawan)

if (hasil === "seri"){
  console.log("Hasilnya seri");
}else {
  console.log("Pemenangnya adalah "+ hasil);
}