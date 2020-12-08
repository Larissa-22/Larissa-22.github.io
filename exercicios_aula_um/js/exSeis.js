function chamaFuncao(){
    var num= document.getElementById("entrada").value;
    
    num= parseFloat(num);
    
    var resultado= custoFinal(num);
    alert("O custo final do carro eh: " + "R$ " + resultado );
}

function custoFinal(valor){
    return valor + (valor * 0.28) + (valor * 0.45);
    
}