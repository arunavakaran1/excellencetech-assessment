var arr = [0,0,1,1,1,0,1,0,1,1];
var sum = 0;
var max  = 0 ;
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] == 0){
            sum = 0;
           } else {
               sum++;
               if(sum > max)
                   max = sum;
           }
        }
        document.write(max);