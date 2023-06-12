function encontrarPares(arr){
   
    for(let i = 0; i <= arr.length; i++ ){
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }
    
    
}

console.log(encontrarPares([1,2,3,4]))
console.log(encontrarPares([2,4,6,10]))
console.log(encontrarPares([1,2,3,4,8,5]))