//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1= Number (prompt("ingrese el primer numero"));
const num2= Number (prompt("ingrese el segundo numero"));
const num3= Number (prompt("ingrese el tercer numero"));

if(num1 > num2)  {
    console.log ("el primero es mayor que el segundo y el tercero")
} else  if  (num1 === num2) {
    console.log ("los numeros son iguales");
}  else if (num2 > num3) {
    console.log ("el segundo es mayor que el primero y el tercero");
} else if (num2 == num3) {
    console.log ("los numeros son iguales");
}  if (num2 < num3) {
    console.log ("el tercero es mayor que el primero y el segundo")
}
