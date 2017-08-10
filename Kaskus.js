function deretKaskus(n){
  //write code here
  var deret = [];
  var kelipatan = 0;
   for( var x = 0; x < n; x++){
        kelipatan +=3;
        if ( (kelipatan %5) == 0 && (kelipatan %6) == 0 ){
          deret.push("Kaskus")
        } else if ((kelipatan %5) == 0){
          deret.push ("Kas")
        } else if((kelipatan %6) == 0){
          deret.push ("Kus")
        }else{
          deret.push (kelipatan)
        }
    }

    return deret;
}

console.log(deretKaskus(10));
