function deretKaskus(n){

var deret = [];
var kelipatan = 0;
    for( var i = 3; i <= n; i+=3){
    if (i %5 == 0 && i %6 == 0) {console.log("kaskus")}
    else if (i %5 == 0){
    console.log ("kas")
    }else if (i %6 == 0){
    console.log ("kus")}
    else {console.log (i)}

}
}

deretKaskus(15)
