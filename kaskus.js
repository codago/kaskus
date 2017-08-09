function deretKaskus(y){
  var series = []
  var x;
  var z=3;
  for (x=0; x<y; x++)
  {if (z % 5 === 0 && z % 6 == 0){series.push("KASKUS");}
  else if (z % 5 === 0 ){series.push("KAS");}
  else if (z % 6 === 0 ){series.push("KUS");}
  else {series.push(z);}
  z += 3;}
  return series;
}
console.log(deretKaskus(10));
