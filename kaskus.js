function deretKaskus(n){

  var deret = [];
  var multi = 0;
  for( var i = 0; i<n; i++){
    multi += 3;
    if ((multi % 5) === 0 && (multi % 6) === 0) {
      deret.push("kaskus")
    } else if (multi % 5 === 0){
      deret.push("kas")
    } else if (multi % 6 === 0){
      deret.push("kus")
    } else {
      deret.push(multi)
    }
  }
  return deret;
}
console.log(deretKaskus(10));
