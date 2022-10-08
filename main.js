function tocaRadio(){

    document.querySelector('#trilha').play();
}

const listaRadio = document.querySelectorAll('.estacao');



for (let i = 0; i < listaRadio.length; i++) {
   
    listaRadio[i].onclick = tocaRadio
    console.log(i)
    
}





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

}

