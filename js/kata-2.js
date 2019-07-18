// 13-07-2019
 
/*Consigna:
Algoritmo que lea tres numeros decimales positivos y calcule e imprima el promedio de ellas.
declaro las notas:*/
var num1 = prompt('por favor indique el valor 1 de 3');
var num2 = prompt('por favor indique valor 2 de 3');
var num3 = prompt('por favor indique valor 3 de 3');

//Convertir String a Numero y concatenar
var parse = (parseInt(num1)+parseInt(num2)+parseInt(num3));

//Calcular el promedio
var media = parse/3

//Mostrar el resultado
document.write(`Los 3 numeros ingresados fueron ${num1}, ${num2}, ${num3} y el promedio fue de ${media}`)


