function chamaFuncao(){
    var num= document.getElementById("entrada").value;
    
    num= parseInt(num);
    
    var resultado= descobreCusto(num);
    alert("O custo total da compra foi de: " + "R$" + resultado);
}

function descobreCusto(valor){
    if(valor < 6){
        return valor*1.30;
    }
    else if(valor >= 12){
        return valor*1;
    }
    else{
        return valor*1.30;
    }
        
}
