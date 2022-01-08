
 for (var  i = 10; i <=15 ; i ++ ) {
     setTimeout (()  => {
         console.log(i);
     }, 1000);
 }

 for(var i=0; i<5; i++) {
    setTimeout(((j) => {
      console.log(j);
    })(i), 1000);
  }
  

 15
15
15
15
1515
15
15
15
15