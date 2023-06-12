function contarVocales(palabra){
    let contador = 0;
       for (let i = 0; i <= palabra.length; i++) {
         if (
           palabra.charAt(i) == "a" ||
           palabra.charAt(i) == "e" ||
           palabra.charAt(i) == "i" ||
           palabra.charAt(i) == "o" ||
           palabra.charAt(i) == "u"
         ) {
           contador++;
         }
       }
       return contador;
  }
  console.log(contarVocales("Yeison Arley Castellanos"));
  