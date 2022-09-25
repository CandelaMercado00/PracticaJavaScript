//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const num1 =Number (prompt("ingrese el primer numero"));
const num2=Number (prompt("ingrese el segundo numero"));

if(num1 > num2) {
    console.log ("el primemro es mayor que el segundo")
} else  if  (num1 === num2) {
    console.log ("los numeros son iguales");
} else {
    console.log ("el primero no es mayor que el segundo")
}

