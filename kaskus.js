function deretKaskus(n){
  var count = 3;
  var array = [];
  do {
    if (count % 5 == 0 && count % 6 == 0){
      array.push("KASKUS");
    }else if (count % 5 === 0 ){
      array.push("KAS");
    }else if (count % 6 === 0) {
      array.push("KUS");
    }else {
      array.push(count);
    }
    count+=3;
  } while (count <=(n*3));
  return array;
  }

console.log(deretKaskus(10));
