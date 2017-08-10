function deretKaskus(n){
  var count = 3;
  var result = []
  do{
    if(count % 5 === 0 && count % 6 ===0){
      result.push("KASKUS");
    }else if (count % 5 === 0){
      result.push("KAS");
  }else if (count % 6 === 0){
      result.push("KUS");
  }else {
      result.push(count);
  }
    count +=3;

  }while(count<=(n*3))
  return result
}

console.log (deretKaskus(10));
