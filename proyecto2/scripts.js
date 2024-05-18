// Esta función suma dos números ingresados en los campos de entrada y muestra el resultado en otro campo
function sumar(){
    // Obtener el valor del primer campo de entrada
    var valor1 = document.getElementById('valor1').value;
    // Obtener el valor del segundo campo de entrada
    var valor2 = document.getElementById('valor2').value;
    // Sumar los dos valores convertidos a números enteros
    var resultado = parseInt(valor1) + parseInt(valor2);
    // Mostrar el resultado en el campo de salida
    document.getElementById('resultado').value = resultado;
}

// Esta función resta el segundo número ingresado al primero y muestra el resultado en otro campo
function restar(){
    // Obtener el valor del primer campo de entrada
    var valor1 = document.getElementById('valor1').value;
    // Obtener el valor del segundo campo de entrada
    var valor2 = document.getElementById('valor2').value;
    // Restar el segundo valor al primero convertidos a números enteros
    var resultado = parseInt(valor1) - parseInt(valor2);
    // Mostrar el resultado en el campo de salida
    document.getElementById('resultado').value = resultado;
}

// Esta función multiplica los dos números ingresados y muestra el resultado en otro campo
function multiplicar(){
    // Obtener el valor del primer campo de entrada
    var valor1 = document.getElementById('valor1').value;
    // Obtener el valor del segundo campo de entrada
    var valor2 = document.getElementById('valor2').value;
    // Multiplicar los dos valores convertidos a números enteros
    var resultado = parseInt(valor1) * parseInt(valor2);
    // Mostrar el resultado en el campo de salida
    document.getElementById('resultado').value = resultado;
}

// Esta función divide el primer número ingresado por el segundo y muestra el resultado en otro campo
function dividir(){
    // Obtener el valor del primer campo de entrada
    var valor1 = document.getElementById('valor1').value;
    // Obtener el valor del segundo campo de entrada
    var valor2 = document.getElementById('valor2').value;
    // Dividir el primer valor por el segundo convertidos a números enteros
    var resultado = parseInt(valor1) / parseInt(valor2);
    // Mostrar el resultado en el campo de salida
    document.getElementById('resultado').value = resultado;
}


function sumar2(a, b){
    // Obtener el valor del primer campo de entrada
    var valor1 = a;
    // Obtener el valor del segundo campo de entrada
    var valor2 = b;
    // Restar el segundo valor al primero convertidos a números enteros
    var resultado = parseInt(valor1) - parseInt(valor2);
    // Mostrar el resultado en el campo de salida
    document.getElementById('resultado').value = resultado;
}