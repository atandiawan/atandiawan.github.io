//My Player Voting App
//Voting untuk pemain favorit, dengan ide orang akan melakukan voting satu per satu selagi berada depan komputer
//Setelah memasukan suara saya, saya akan bergantian dengan teman saya. Mereka masukan juga
//Di akhir voting, akan terdapat suara total masing-masing pemain

//Creating empty array
var choices = [];

//Creating object for method
var list = new Object();

list.vote = function(){
  //To make initial value to do voting, later there will be trigger to stop voting
  var count = "Y";
  
  //Will keep voting unless value is not Y
  while (count === "Y"){  
    myvote = prompt("Masukan pemain favorit anda"); 
    y=0;
    
    //if the name is already in the list, then it will add the number of vote
    for (x in choices){
      if (choices[x].name === myvote){
        choices[x].number++;
        y = y + 1;
      } 
    }
    
    //if the name is not in the list yet, then it will create new value for both name and number
    if (y === 0){
      choices[choices.length]= {name: myvote, number: 1};
    } 
    count = prompt("Masi mau lanjut voting? (Y/N)");
  
  }
}
list.vote();
console.log(choices);
