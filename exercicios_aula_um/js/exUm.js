
function chamaFuncao(){
    var valor1= document.getElementById("entradaUm").value;   
    var valor2= document.getElementById("entradaDois").value;      
 
    valor1= parseInt(valor1);  
    valor2= parseInt(valor2);

    var resultado = soma(valor1, valor2);
    alert("O resultado da soma eh:" + resultado);
}

function soma (operando1, operando2){
    return operando1 + operando2;
}