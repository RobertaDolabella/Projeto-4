let quantasCartas;
let listadeFiguras = []
let listaDuplicada=[]
let inputdeCartasBaixo;
let inputdeCartasCima;
let listaEmbaralhada = []
let contadordeJogadas;
let contadordeCartas=0
function comecar(){
    quantasCartas = prompt("Com quantas cartas deseja jogar?")
    if(quantasCartas%2 ==0 && quantasCartas<14 && quantasCartas>4){
    }
    else{
        while(quantasCartas%2 !== 0 || quantasCartas>14 || quantasCartas<4 || quantasCartas == isNaN){
            alert("O numero de cartas deve ser par e deve estar no intervalo entre 4 e 14.")
            quantasCartas = prompt("Com quantas cartas deseja jogar?")
        }
    }
}
comecar()
function comparador() { 
	return Math.random() - 0.5; 

}
function gerarCartas(){
    let listagifs = ["${/imagens/bobrossparrot.gif}","/imagens/explodyparrot.gif","/imagens/fiestaparrot.gif","/imagens/metalparrot.gif","/imagens/revertitparrtot.gif","/imagens/tripletsparrot.gif","/imagens/unicornparrot.gif"]
    let i =0 
    while(i<7){
        listaDuplicada.push(listagifs[i])
        listaDuplicada.push(listagifs[i])
        i = i+1
    }
    console.log(listaDuplicada)
    listaDuplicada.splice(quantasCartas,13)
    let tamanho = listaDuplicada.length
    i=0
    let listadeImagens=[]
    while(i<tamanho){
        listadeImagens.push({imagem: listaDuplicada[i], posicao:"indefinida", status:"fechado"})
        i++
    }
    console.log(tamanho)
    let index= []
    i=0
    while(i<tamanho){
        index[i] = i
        i++
    }
    let listaAleatoria = index.sort(comparador);   
    i=0  
    while(i<tamanho){
        listadeImagens[i].posicao= listaAleatoria[i]
        i++
    }
    i=0
    while(i<tamanho){
        let m=0
        while(listadeImagens[m].posicao!=i){
            m++
        }
        listaEmbaralhada.push(listadeImagens[m].imagem)
        i++
    }
    console.log(listaEmbaralhada)
}

function colocarCartas(){
    const inputdeCartasCima = document.querySelector(".cima")
    let contador=0 
    while(contador<quantasCartas/2){
        inputdeCartasCima.innerHTML +=`
            <div class="carta" onclick="virar(this)">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" class="display" >
                <img src="${listaEmbaralhada[contador]}" width="90px" height="90px" class="gif escondido">
            </div>`
    contador++
    }
    const inputdeCartasBaixo = document.querySelector(".baixo") 
    while(contador<quantasCartas){
        inputdeCartasBaixo.innerHTML +=`
            <div class="carta" onclick="virar(this)">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" class="display">
                <img src="${listaEmbaralhada[contador]}" width="90px" height="90px" class="gif escondido">
            </div>`
    contador++
    }
}
function virar(element){
    contadordeCartas++
    let carta1;
    let carta2;
    element.querySelector(".display").classList.add("escondido")
    element.querySelector(".gif").classList.remove("escondido")
    element.classList.add("selecionada")
    teste = element.classList.add("selecionada")
    console.log(teste)
    if(contadordeCartas==1){
        carta1=element.querySelector(".selecionada").querySelector(".gif")
    }
    else if(contadordeCartas==2){
        carta2=element.querySelector(".selecionada").querySelector(".gif")
        if(carta1==carta2){
            carta1.remove(carta1)
            carta2.remove(carta2)
            carta1;
            carta2;
        }
        else{
            document.querySelector(".selecionada").querySelector(".display").classList.remove("escondido")
            document.querySelector(".selecionada").querySelector(".gif").classList.add("escondido")
            document.querySelector(".selecionada").classList.remove("selecionada")
            
            
            document.querySelector(".selecionada").querySelector(".display").classList.remove("escondido")
            document.querySelector(".selecionada").querySelector(".gif").classList.add("escondido")
            document.querySelector(".selecionada").classList.remove("selecionada")
            carta1;
            carta2;
        }
        contadordeCartas=0
    }
    
    contadordeJogadas++
}
console.log(listaEmbaralhada)
colocarCartas()
gerarCartas()