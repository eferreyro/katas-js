//19-07-2019

/*Hacer un algoritmo que lea un texto de entrada que tenga puntos entre palabras y los reemplace por un guion bajo */

var texto=prompt('Por favor ingrese texto con puntos');
var textoConGuion=texto.split(".");
for(var i=0;i<textoConGuion.length;i++){
    document.write(`${textoConGuion[i]}_`);
};
