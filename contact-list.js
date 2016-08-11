var DaftarKontak = [];
var Program = new Object();

Program.tambahKontak = function(nama, email, telepon){
  DaftarKontak[DaftarKontak.length] = {
    email: email,
    nama: nama,
    telepon: telepon
  }
}

Program.lihatSemua = function(){
  console.log("-----Daftar Kontak-----");
  for (i=0; i<DaftarKontak.length; i++){
    console.log(i+". Nama: "+ DaftarKontak[i].nama);
    console.log("  Email: "+ DaftarKontak[i].email);
    console.log("  Telepon: "+ DaftarKontak[i].telepon);
  }
}

Program.cariKontak = function(namainput){
  y=0;
  console.log("----Email yang anda cari adalah:----");
  for (x in DaftarKontak){    
    if (DaftarKontak[x].nama === namainput){
      y = y+1;
      console.log("Nama: "+DaftarKontak[x].nama);
      console.log("Email: "+DaftarKontak[x].email);
    }else{
      
    }
  }
  if (y === 0){
    console.log("Tidak ada nama itu");
  }

}

Program.tambahKontak("saya","saya@gmail.com","021345");
Program.tambahKontak("aku","aku@gmail.com","02183493");

Program.lihatSemua();

Program.cariKontak("saya");