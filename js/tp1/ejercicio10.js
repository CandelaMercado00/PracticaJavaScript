//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const num1 = Number (prompt("Escribe un numero"));
 
if (num1 / 2) {
   esPar (num1)
   return (num1 % 2) == 0; 
}
/*function esInpar(num1)
{
    return (num1 & 2) /= 0;
}
function esPar(num1) 
{ 
  return (num1 % 3) == 0; 
}
function esInpar(num1)
{
    return (num1 & 3) /= 0;
}
function esPar(num1) 
{ 
  return (num1 % 5) == 0; 
}
function esInpar(num1)
{
    return (num1 & 5) /= 0;
}
function esPar(num1) 
{ 
  return (num1 % 7) == 0; 
}
function esInpar(num1)
{
    return (num1 & 7) /= 0;
} */
