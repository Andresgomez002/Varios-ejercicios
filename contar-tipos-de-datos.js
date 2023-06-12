const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
let contadorn = 0;
let contadors = 0;
let numeros = [];
let strings = [];

for(let i = 0; i <= datos.length; i++){
    if( typeof datos[i] === "number"){
        contadorn++;
        numeros.push(datos[i])
        
       
    }
    else if(typeof datos[i] === "string"){
        contadors++;
        strings.push(datos[i])
    }
}
console.log("Hay " + contadorn + " elementos de tipo number");
console.log(numeros);
console.log("Hay " + contadors + " elementos de tipo string");
console.log(strings);