function data() {
    var nama = document.getElementById("name").value;
    var nilai1 = parseInt(document.getElementById("nilai1").value);
    var nilai2 = parseInt(document.getElementById("nilai2").value);
    var nilai3 = parseInt(document.getElementById("nilai3").value);
    var nilai4 = parseInt(document.getElementById("nilai4").value);
    var nilai5 = parseInt(document.getElementById("nilai5").value);
    var grade;
  
    jumlah = nilai1 + nilai2 + nilai3 + nilai4 + nilai5 ;
  
    if(jumlah >=20){
      grade = "A";
    } else if(jumlah >= 15){
      grade = "B";
    } else if(jumlah >= 10){
      grade = "C";
    } else if(jumlah >= 5){
      grade = "D";
    } else {
      grade = "E";
    }
    
    document.getElementById("outputName").innerHTML="Nama : "+nama;
    document.getElementById("hasil").innerHTML="Jumlah : "+jumlah;
    document.getElementById("grade").innerHTML="Grade : "+grade;
}