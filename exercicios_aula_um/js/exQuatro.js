
function chamaFuncao(){
    var num1= document.getElementById("entrada1").value;
    var num2= document.getElementById("entrada2").value;

    num1= parseInt(num1);
    num2= parseInt(num2);

    var resultado= descobreHipotenusa(num1,num2);
    alert("A hipotenusa eh:" + resultado);
}

function descobreHipotenusa(cateto1, cateto2){
    var h= Math.sqrt(cateto1*cateto1+cateto2*cateto2);
    return h;
}