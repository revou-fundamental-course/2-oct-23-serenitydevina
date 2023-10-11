var celcius="";
document.getElementById("hasil").addEventListener("Konversi", convert());
celcius = parseFloat();
  function convert() {
    var celcius = document.getElementById("Celcius").value;
    var fahrenheit = (celcius*9/5) + 32;
   document.getElementById("hasil").innerHTML= fahrenheit;
    
   var hasilPerhitungan = celcius +" *9/5 + 32 = " +fahrenheit;
   document.getElementById("hasilperhitungan").innerHTML=hasilPerhitungan;
  }

  
      

  


  