//16-07-2019

/* Pide la edad y si es mayor de 18 años indica que ya puede conducir.*/

const edadBase = 18;

var edad = prompt('Por favor ingrese edad');

if (edad >= edadBase){
    //Imprimo el nombre y el total del salario
document.write(`Tienes ${edad} años y puedes conducir`)

}else if(edad <= edadBase){
    document.write(`Tienes ${edad} y NO puedes conducir`)

};
