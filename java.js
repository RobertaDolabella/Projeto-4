let quantasCartas;
let listadeFiguras = []
let listaDuplicada=[]
let inputdeCartasBaixo;
let inputdeCartasCima;
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
            <div class="carta" onclick="mostrarCartas(this,${contador})">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" >
            </div>`
    contador++
    }
    const inputdeCartasBaixo = document.querySelector(".baixo") 
    while(contador<quantasCartas){
        inputdeCartasBaixo.innerHTML +=`
            <div class="carta" onclick="mostrarCartas(this,${contador})">
                <img src="/imagens/front.png" alt="" width="100px" height="100px">
            </div>`
    contador++
    }
}
function comparador() { 
	return Math.random() - 0.5; 

}
function gerarCartas(){
    let listaHtml = document.querySelector(".gif").querySelectorAll("img")
    let i =0 
    while(i<7){
        listaDuplicada.push(listaHtml[i])
        listaDuplicada.push(listaHtml[i])
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
    listadeFiguras = listadeImagens
    console.log(listadeFiguras)
}


function mostrarCartas(elemento, contador){
    let i = 0
    let fila = listadeFiguras[0].posicao
    while(fila!=contador){
        i++
        fila = listadeFiguras[i].posicao
    }
    console.log(fila)
    console.log(listadeFiguras[i].imagem)
    elemento.innerHTML = `
    <div class="carta">
        ${listadeFiguras[i].imagem}
    </div>`

}
colocarCartas()
gerarCartas()