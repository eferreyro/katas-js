//15/072019

 /*Consigna:
 Algoritmo que calcule lo que gana un empleado con base a las horas trabajadas teniendo en cuenta
  que cada hora se paga a 2000, adicionalmente se le realiza unos descuentos con respecto a un
 impuesto de seguridad del 10% sobre su salario. el sistema debe imprimir un mensaje indicando 
 el nombre del empleado y su sueldo total.*/

//Capturo nombre empleado y horas trabajadas
var nombreEmpleado = prompt('Por favor indique el nombre del empleado');
var horasTrabajadas = prompt('Indique la cantidad de horas trabajadas');
//Calculo el monto del valor ingresado
var totalHoras = parseInt(horasTrabajadas)*2000
//Calculo el impuesto del 10%
var horasImpuestos = totalHoras*0.10
var totalHorasConImpuesto = totalHoras-horasImpuestos
//Imprimo el nombre y el total del salario
document.write(`El empleado ${nombreEmpleado} cobra un total de sueldo de ${totalHorasConImpuesto}`)

