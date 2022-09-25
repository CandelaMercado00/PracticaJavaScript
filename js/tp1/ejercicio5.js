/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

/*
parseInt() numeros enteros
parseFloat() numeros decimales
numer() -- todo es para convertir un prompt en numero asi se puedan sumar*/

const num1 = prompt("ingrese el primer numero");
const num2= prompt("ingrese el segundo numero");

const result = Number (num1) + Number (num2); //3+5=8
// es distinto de const result =Number (num1 +num2); // 35 --> Numner (35)= 35 (int)


console.log("el resutado es "+ result)