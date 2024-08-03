exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('p', 'Adivinhe se a palavra é um Palíndromo');
    exibirTextoNaTela('p', 'Digite qualquer palavra abaixo');
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarPalavra() {
    let palavra = document.querySelector('input').value;
    let vetorContrario=[];
    let palavraContraria='';

    if(palavra==''){
        exibirTextoNaTela('p', 'Nenhuma palavra digitada!');
        alert(`Nenhuma palavra digitada!`);
        reiniciarJogo();
    }
    else{
        for(var i=palavra.length; i>=0; i--){
            vetorContrario[i] = palavra.substr(i,1);
            palavraContraria = palavraContraria+vetorContrario[i];
        }
        if(palavra==palavraContraria){
            exibirTextoNaTela('p', `A palavra ${palavra} é um palíndromo!`);
            alert(`A palavra ${palavra} é um palíndromo!`);
        }
        else{
            exibirTextoNaTela('p', `A palavra ${palavra} não é um palíndromo!`);
            alert(`A palavra ${palavra} não é um palíndromo!`);
        }
        document.getElementById('verificar').disabled = true;
        document.getElementById('reiniciar').disabled = false;
    }
}

function reiniciarJogo() {
    document.getElementById('palavra').value = '';
    document.getElementById('palavra').focus();
    document.getElementById('verificar').disabled = false;
    document.getElementById('reiniciar').disabled = true;
    exibirMensagemInicial();
}







