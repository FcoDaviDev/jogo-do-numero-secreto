let listaDeNumerosSorteados = []
let limiteNumeros  = 5
let numeroSecreto = gerarNumeroAleatorio()
let numeroTentativas = 1
mensagemInicial()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}


function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1)
   let qtdElementosNaLista = listaDeNumerosSorteados.length;
   if(qtdElementosNaLista== limiteNumeros) {
    listaDeNumerosSorteados= []
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
   }
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')



function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = numeroSecreto > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
       if(chute < numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é maior')
       }
       if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor')
       }
       numeroTentativas++
       limparCampo()
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value=''
}

function reiniciarJogo() {
    limparCampo()
    numeroTentativas = 1
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

