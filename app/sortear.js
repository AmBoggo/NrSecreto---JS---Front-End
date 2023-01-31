const maiorValor = 100;
const menorValor = 0;
const numeroSecreto = gerarNumeroAleatorio()
const maiorTela = document.getElementById("maior_valor")
const menorTela = document.getElementById("menor_valor")

maiorTela.innerHTML = maiorValor
menorTela.innerHTML = menorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*maiorValor +  1)
}

console.log(numeroSecreto)