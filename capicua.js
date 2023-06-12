function esCapicua(numero){
    let separar = numero.toString().split("").reverse();
    

    return numero == separar.join("") ? true : false;
}

console.log(esCapicua(12321))
console.log(esCapicua(12322))
console.log(esCapicua(353))
console.log(esCapicua(13321))