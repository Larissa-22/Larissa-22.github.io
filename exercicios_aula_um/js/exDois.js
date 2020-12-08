
function chamaFuncao(){
    var num1= document.getElementById("entrada1").value;
    var num2= document.getElementById("entrada2").value;

    num1= parseInt(num1);
    num2= parseInt(num2);

    var resultado= descobreMaior(num1,num2);
    alert("O numero maior eh:" + resultado);
}

function descobreMaior( valorUm, valorDois){
    if(valorUm > valorDois)
         return valorUm;
    else
        return valorDois;
    
}