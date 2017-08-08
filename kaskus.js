function deretKaskus(n){
  var count = 3;
  do{
    if(count %5 === 0 && count% 6 ===0){
      console.log("KASKUS");
    }else if(count%5 ===0){
      console.log("KAS");
    }else if(count%6 ===0){
      console.log("KUS");
    }else{
      console.log(count);
  }
  count +=3;
}while(count<=n);
}

deretKaskus(30);
