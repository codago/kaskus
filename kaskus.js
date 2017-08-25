'use strict'

function deretKaskus(n) {
var perkalian = 0;
var result = [] ;

for (var x = 0; x <  n; x++) {
 perkalian += 3;
if (perkalian % 5 === 0 && perkalian % 6 === 0) {
  result.push ("KASKUZ") ;
}
else if (perkalian % 5 === 0) {
  result.push ("KAS");
}
else if (perkalian % 6 === 0) {
  result.push ("KUZ");
}
else {
   result.push (perkalian);

}
}
return result;
}

console.log(deretKaskus(10));
