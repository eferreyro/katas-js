/* Definicion de ciclos:
Los ciclos e iteraciones son una manera sencilla de lograr repeticiones de eventos o funciones
para conseguir diversas operaciones repetidamente.
*/

/*Tipos de ciclos
for
do while
while
label
break
continue
case
*/

 /*BUCLE FOR
 Un bucle for se repite hasta que la condición especificada se evalúa como false 
 for ([expresionInicial]; [condicion]; [expresionIncremento])
  sentencia
 

let number= 1; //indico el valor inicial del ciclo

for (i=number; i<=10; i++){
        document.write(`<br>${i}</br>`)
    }

var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
for (i = 0; i <= dias.length -1; i++){
    document.write( `<br>${dias[i]}</br>` )
}
  
*/

 /* BUCLE WHILE
    While es una condicion MIENTRAS. es decir que mientras sea verdadera, va a ejecutar el ciclo,
    cuando sea falsa, sale del ciclo y entra al primer comando inmediatamente despues del ciclo.
 
 */
var num = 0;
while (num <= 10){
    document.write(`<br> El numero ahora es ${num} </br>`);
} 