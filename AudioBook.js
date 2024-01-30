const botaoPLayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const proximaFaixa = document.getElementById('proximo');
const faixaAnterior = document.getElementById('anterior');
const capAtual = document.getElementById('capitulo')

let numerosCapitulos = 10;
let capitulo = 1;
let taTocando = 0;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPLayPause.classList.remove('bi-play-circle-fill');
    botaoPLayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPLayPause.classList.remove('bi-pause-circle-fill');
    botaoPLayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    }    
    else{
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaF() {
    if (capitulo === numerosCapitulos) {
        capitulo = 1;
    } else {
        capitulo = capitulo + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capitulo + '.mp3';
    tocarFaixa();
    capAtual.innerText = "Capítulo " + capitulo;
    taTocando = 1;
}

function anteriorF() {
    if (capitulo === 1) {
        capitulo = numerosCapitulos;
    } else {
        capitulo = capitulo - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capitulo + '.mp3';
    tocarFaixa();
    capAtual.innerText = "Capítulo " + capitulo;
    taTocando = 1;
}


function trocarNomeFaixa() {
    
}


botaoPLayPause.addEventListener('click', tocarOuPausar);
proximaFaixa.addEventListener('click', proximaF);
faixaAnterior.addEventListener('click', anteriorF);
