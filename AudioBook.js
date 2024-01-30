const botaoPLayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');

let numerosCapitulos = 10;
let taTocando = 0;

function tocarFaixa() {
    audioCapitulo.play();
}

function pausarFaixa(){
    audioCapitulo.pause();
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


botaoPLayPause.addEventListener('click', tocarOuPausar);
