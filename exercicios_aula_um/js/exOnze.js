function chamaFuncao(){
    var num1= document.getElementById("entrada1").value;
    var num2= document.getElementById("entrada2").value;
    var num3= document.getElementById("entrada3").value;
    
    num1= parseInt(num1);
    num2= parseInt(num2);
    num3= parseInt(num3);
    
    var resultado= mediaPonderada(num1,num2,num3);
    alert("Sua média eh: " + resultado);
}

function mediaPonderada(nota1,nota2,nota3){
    return (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
}