function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    
    

    const idAudio = `#som_${instrumento}`
    //console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    //console.log(listaDeTeclas[i])
}
// Começando novo codico

const retornoTecla = 0 ;