function operar(operacion){
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;

    if(operacion == '+'){
        var resultado = parseInt(valor1) + parseInt(valor2);
    }

    if(operacion == '-'){
        var resultado = parseInt(valor1) - parseInt(valor2);
    }

    if(operacion == '*'){
        var resultado = parseInt(valor1) * parseInt(valor2);
    }

    if(operacion == '/'){
        var resultado = parseInt(valor1) / parseInt(valor2);
    }

    document.getElementById('resultado').value = resultado;
}