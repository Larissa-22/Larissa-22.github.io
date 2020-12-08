function chamaFuncao(){
    var num= document.getElementById("entrada").value;
    
    num= parseFloat(num);
    
    var resultado= descobreCelsius(num);
    alert("Esse valor em graus celsius eh: " + resultado);
}

function descobreCelsius(valor){
    var cel = ((valor - 32) * 5 ) /9;
    return cel;
}