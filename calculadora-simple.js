let operaciones = prompt(" Digite la operacion que desea ejecutar: ");
switch(operaciones){
    case "suma":
        function opSuma(a, b){
             a = Number(prompt("Digita un numero: "))
             b = Number(prompt("Digita otro numero: "))
            let resultado = a + b;
            return resultado;    
        }
        console.log("El resultado de la suma es: " + opSuma());
        break;

     case "resta":
        function opResta(x, y){
            x = Number(prompt("Digita un numero: "))
            y = Number(prompt("Digita otro numero: "))
           let resultador = x - y;
           return resultador;    
       }
       console.log("El resultado de la resta es: " + opResta());
 
     case "multiplicacion":
        function opMultiplicacion(x, y){
            x = Number(prompt("Digita un numero: "))
            y = Number(prompt("Digita otro numero: "))
           let resultador = x * y;
           return resultador;    
       }
       console.log("El resultado de la Multiplicacion es: " + opMultiplicacion());
        
       case "division":
        function opDivision(x, y){
            x = Number(prompt("Digita un numero: "))
            y = Number(prompt("Digita otro numero: "))
           let resultador = x / y;
           return resultador;    
       }
       console.log("El resultado de la division es: " + opDivision());  

}
