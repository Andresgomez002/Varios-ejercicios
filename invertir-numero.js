
function invertirNumero(numero) {
    const convertir = numero.toString().split("").reverse().join("");
    return Number(convertir);
  }
  
  console.log(invertirNumero(12345678));
  console.log(invertirNumero(87654321));
  console.log(invertirNumero(98765432));
  console.log(invertirNumero(543219876));