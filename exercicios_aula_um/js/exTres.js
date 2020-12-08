function chamaFuncao(){
    var valor= document.getElementById("entrada").value;   
        
    valor= parseInt(valor);  
    
    var resultado = primo(valor);
    alert(valor + ": " + resultado);
}

function primo(num){
    if(num != 2 && num % 2== 0.00){
        return "Nao eh um numero primo";
    }
    else if(num == 2){
        return "Eh um numero primo";
    }
}