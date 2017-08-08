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
    var result = [];
    do{
        if(count % 5 === 0 && count% 6 === 0){
        result.push("KASKUS");
    }else if(count % 5 === 0){
        result.push("KAS");
    }else if(count%6 ===0){
        result.push("KUS");
    }else{
        result.push(count);
    }
        count+=3;
        n--;
    }while(n>0);

    console.log(result);
}


deretKaskus(10);