function encontrarMayor(arr){
    let max = arr[0];
    for(let i=0; i<=arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(encontrarMayor([1, 5, 8, 3]))
console.log(encontrarMayor([29, 5, 35, 1]))
console.log(encontrarMayor([2, 10, 1, 50]))
console.log(encontrarMayor([3, 52, 100, 6]))