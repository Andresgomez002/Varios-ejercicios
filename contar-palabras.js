function contarPalabras(frase){
    let fraseDividida =  frase.split(" ");
    return fraseDividida.length;
}
console.log(contarPalabras("hola mundo como estas"));
console.log(contarPalabras("hola adios buenos dias buenas tardes "));
console.log(contarPalabras("andres nicolas"))