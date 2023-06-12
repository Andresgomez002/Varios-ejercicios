const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
let numeros = [];
let strings = [];

for(let i = 0; i <= datos.length; i++){
    if( typeof datos[i] === "number"){
        numeros.push(datos[i]) 
        datos.splice(i, 1) 
        
       
    }
}
    for(let i = 0; i <= datos.length; i++){
     if(typeof datos[i] === "string"){
        strings.push(datos[i])
        datos.splice(i,1)
       
       
    }
}

console.log(datos);
console.log(numeros);
console.log(strings);
