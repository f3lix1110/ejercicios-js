//Declaracion de Funcion
function Saludar(){
    alert("Hola a todos")
}

Saludar();

//Expresion de funcion
var Cantar = function(){
    alert("A mi me gusta cantar");
}

Cantar();


//funcion sin parametros
function Sumar(){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert("la suma de la funcion sin parametros es: "+suma);
}

Sumar();

//funcion con parametros
function restar(nume1,nume2,resta){
    var nume1 = 6;
    var nume2 = 8;
    var resta = nume2 - nume1;
    alert("la resta de la funcion sin parametros es: "+resta);
}
restar();

//Añadiendole el parametro
function Cuadrado (cuadrado)
{
    var rescuadrado = cuadrado * cuadrado;
    alert("El cuadrado del numero es: "+rescuadrado);
}

Cuadrado(4);

function Operaciones (num1, num2, num3, suma, resta, multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;
    alert("La suma es "+suma+", la resta es: "+resta+", la multiplicacion es: "+multi);

}

Operaciones(3,4,5);
