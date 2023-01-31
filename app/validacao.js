function verificaValidade(chute) {
    const numero = +chute

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += "<div>Inválido!!! Fale apenas números.</div>"
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorValor} e ${maiorValor}!!!</div>`
        return
    }

    if (numeroAcertou(numero)) {
        elementoChute.innerHTML += `<h2>Parabéns!!! Você acertou o número secreto.</h2> 
        <br>
        <button class="btn" id="restart">Reiniciar</button>`
    }

    if (numeroEMaior(numero)){
        console.log("O número é menor")
        elementoChute.innerHTML += "<div>O número secreto é menor <i class='fa-solid fa-arrow-down'></i></div>"
    }
    if (numeroEMenor(numero)){
        console.log("O número é maior")
        elementoChute.innerHTML += "<div>O número secreto é maior <i class='fa-solid fa-arrow-up'></i></div>"
    }
}

function numeroEMaior(numero) {
    return numero > numeroSecreto
}

function numeroEMenor(numero) {
    return numero < numeroSecreto
}

function numeroAcertou(numero) {
    return numero == numeroSecreto;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'restart') {
        window.location.reload();
    }
})