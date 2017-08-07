function deretKaskus(n){
  //write code here
  for(var i=3;i<=n;i+=3){
    if(i % 5 === 0 && i% 6 === 0){
        console.log("KASKUS");
    }else if(i % 5 === 0){
        console.log("KAS");
    }else if(i%6 ===0){
        console.log("KUS");
    }else{
        console.log(i);
    }
  }
}

deretKaskus(30);