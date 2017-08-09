function deretKaskus(n){
  var n=n;
  var awal=3;
  var kas="KAS";
  var kus="KUS";
  var kaskus="KASKUS";

   for (i=0; i<n; i++)
    {
        if ( (awal%5==0) && (awal%6==0))
          {
            return(kaskus);
          }
        else if (awal%6==0)
          {
            console.log(kus);
          }
        else if (awal%5==0)
          {
            console.log(kas);
          }
        else
          {
            console.log(awal);
          }
        awal+=3;
    }
}
console.log(deretKaskus(10));
