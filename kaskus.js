function deretKaskus(n){
  var awal=3;
  var hasil=[];
  for (i=0; i<n; i++)
    {
        if ( (awal%5==0) && (awal%6==0))
          {
            hasil.push('kaskus');
          }
        else if (awal%6==0)
          {
            //console.log(kus);
            hasil.push('kus');
          }
        else if (awal%5==0)
          {
            //console.log(kas);
            hasil.push('kas')
          }
        else
          {
            //console.log(awal);
            hasil.push(awal);
          }
        awal+=3;
    }
  return(hasil) ;
}
console.log(deretKaskus(10));
