function chamaFuncao(){
    var num1= document.getElementById("entrada1").value;
    var num2= document.getElementById("entrada2").value;
    var num3= document.getElementById("entrada3").value;
    var num4= document.getElementById("entrada4").value;
    
    num1= parseInt(num1);
    num2= parseFloat(num2);
    num3= parseFloat(num3);
    num4= parseFloat(num4);
    
    var resultado= salarioFinal(num1, num2, num3, num4);
    alert("Seu salário final eh: " + "R$ " + resultado );
}

function salarioFinal(valor1, valor2, valor3, valor4){
    return valor3 + (valor4 * valor1) + (valor2 * 0.05);
}