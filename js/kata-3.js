// 14-07-2019


 /*Consigna:
algoritmo que reciba como entrada el sueldo de una persona y sus horas extras trabajadas y luego imprima 
el Sueldo total de esta persona dado que cada hora extra vale $3000.*/
 
//Capturo Sueldo Base y Horas extras trabajadas
var sueldoBase = prompt('indique sueldo base');
var horasExtras = prompt('indique horas extras trabajadas');
//Calculo horas Extras por los 3000 que vale cada Hora
var calcularHorasExtra = horasExtras*3000

//Paso de String a Numero el sueldo Base y las horas extras y los sumo
var totalSalario = parseInt(sueldoBase)+parseInt(calcularHorasExtra);

//Muestro el resultado
document.write(`El empleado ha realizado un total de ${horasExtras} horas extras que suman 
$${calcularHorasExtra} y el <strong>Total de salario es $${totalSalario}</strong>`)
