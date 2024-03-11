function calcular(){  
    let valor_conta = parseFloat(document.getElementById("conta").value);
    let valor_gorj = parseFloat(document.getElementById("gorjeta").value);
    let resultado = Math.round((valor_conta*valor_gorj)/100);

    if(!valor_conta){
        alert('O valor da conta está vazio!!')
    }else{

    let soma = valor_conta + resultado;

    document.getElementById('vlr').textContent = valor_conta.toFixed(2);
    document.getElementById('resultado').textContent = resultado.toFixed(2);
    document.getElementById('somados').textContent = soma.toFixed(2);
         }
}   