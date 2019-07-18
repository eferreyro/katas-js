//17-07-2019

/* Consigna:
Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/



const nota = prompt('Indique una nota');
if (nota >=0 && nota <3){
    document.write(`${nota}  Muy deficiente`)
}
if (nota >=3 && nota <5){
    document.write(`${nota}  Insuficiente`)
}
if (nota >=5 && nota <6){
    document.write(`${nota}  Suficiente`)
}
if (nota >=6 && nota <7){
    document.write(`${nota}  Bien`)
}
if (nota >=7 && nota <9){
    document.write(`${nota}  Notable`)
}
if (nota >=9 && nota <10){
    document.write(`${nota}  Sobresaliente`)
}