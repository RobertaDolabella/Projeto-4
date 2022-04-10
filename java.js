let quantasCartas;
//PEGANDO AS IMAGENS DO HTML

function comecar(){
    quantasCartas = prompt("Com quantas cartas deseja jogar?")
    if(quantasCartas%2 !== 0 || quantasCartas%2 == isNaN ){
        alert("O numero de cartas deve ser par")
        quantasCartas = prompt("Com quantas cartas deseja jogar?")
        while(quantasCartas%2 !== 0 ||quantasCartas%2 == isNaN){
        alert("O numero de cartas deve ser par")
        quantasCartas = prompt("Com quantas cartas deseja jogar?")
    }
    }
}
comecar()
function colocarCartas(){
    const inputdeCartasCima = document.querySelector(".cima")
    let contador=0 
    while(contador<quantasCartas/2){
        inputdeCartasCima.innerHTML +=`
            <div class="carta">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" >
            </div>`
    contador++
    }
    const inputdeCartasBaixo = document.querySelector(".baixo") 
    while(contador<quantasCartas){
        inputdeCartasBaixo.innerHTML +=`
            <div class="carta">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" class="posicao${contador}" onclick="viraraCarta(this)">
            </div>`
    contador++
    }
}
colocarCartas()

function comparador() { 
	return Math.random() - 0.5; 

}
function gerarCartas(){
    let listaHtml = document.querySelector(".gif").querySelectorAll("img")
    let i =0 
    let listaDuplicada=[]
    while(i<7){
        listaDuplicada.push(listaHtml[i])
        listaDuplicada.push(listaHtml[i])
        i = i+1
    }
    listaDuplicada.splice(quantasCartas,13)
    let tamanho = listaDuplicada.length
    let listadeFiguras=[]
    i=0
    while(i<tamanho){
        listadeFiguras.push({imagem: listaDuplicada[i], posicao:"indefinida", status:"fechado"})
        i++
    }
    let index= []
    i=0
    while(i<tamanho){
        index[i] = i
        i++
    }
    let posicao = index.sort(comparador);   
    i=0  
    while(i<tamanho){
        listadeFiguras[i].posicao= posicao[i]
        i++
    }
    console.log(listadeFiguras)
}
gerarCartas()
function mostrarCartas(){

}