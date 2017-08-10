function deretKaskus(n){
  var deret = []
  var multipler = 0
  for (var m=0; m<n; m++){
    multipler += 3;
    if ( multipler % 5 === 0 && multipler % 6 === 0 ){
      deret.push ("KASKUS");
    }else if ( multipler % 5 === 0 ){
      deret.push ("KAS");
    }else if ( multipler % 6 === 0 ){
      deret.push ("KUS");
    }else {
      deret.push (multipler);
    }
}return deret;
}


console.log(deretKaskus(10));
