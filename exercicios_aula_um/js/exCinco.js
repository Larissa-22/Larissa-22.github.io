function chamaFuncao(){
    var valor1= document.getElementById("entrada1").value;  
    var valor2= document.getElementById("entrada2").value; 
        
    valor1= parseFloat(valor1);  
    valor2= parseFloat(valor2);
    
    var resultado = novo(valor1,valor2);
    alert("Seu novo salario eh: " + "R$" + resultado);
}

function novo(num1, num2){
    return (num1 * (num2/100)) + num1;
}