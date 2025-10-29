function calcular() {
    var numero1 = parseFloat(document.getElementById('num1').value)
    var numero2 = parseFloat(document.getElementById('num2').value)
    var numero3 = parseFloat(document.getElementById('num3').value)
    var numero4 = parseFloat(document.getElementById('num4').value)
    var soma = (numero1+numero2+numero3+numero4)/4

if(soma >= 7) {
    document.getElementById('resultado').innerHTML = "Sua Média foi:"+ soma + "Foi Aprovado"
} else if(soma <= 5) {
    document.getElementById('resultado').innerHTML = "Sua Média foi:"+ soma + "Foi Reprovado"
} else {
    document.getElementById('resultado').innerHTML = "Sua Média foi:"+ soma + "Ficou em recuperação"
}

}
