// function deretKaskus(n){
//   //write code here
//   for(var i=3;i<=n;i+=3){
//     if(i % 5 === 0 && i% 6 === 0){
//         console.log("KASKUS");
//     }else if(i % 5 === 0){
//         console.log("KAS");
//     }else if(i%6 ===0){
//         console.log("KUS");
//     }else{
//         console.log(i);
//     }
//   }
// }


function deretKaskus(n){
    var count = 3;
    do{
        if(count % 5 === 0 && count% 6 === 0){
        console.log("KASKUS");
    }else if(count % 5 === 0){
        console.log("KAS");
    }else if(count%6 ===0){
        console.log("KUS");
    }else{
        console.log(count);
    }
        count+=3;
    }while(count<=n);
}


deretKaskus(30);