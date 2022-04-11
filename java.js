let quantasCartas;
let listadeFiguras = []
let listaDuplicada=[]
let inputdeCartasBaixo;
let inputdeCartasCima;
let listaEmbaralhada = []
let contadordeCartas = 0
let contadordeJogadas=0
let carta1;
let carta2;
let CartaValida1;
let CartaValida2
let CartasAcertadas = 0
let x;
let y;
let w;
let z;
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
    colocarCartas()
}

comecar()
function comparador() { 
	return Math.random() - 0.5; 

}
function gerarCartas(){
    let listagifs = ["./imagens/bobrossparrot.gif","./imagens/explodyparrot.gif","./imagens/fiestaparrot.gif","./imagens/metalparrot.gif","./imagens/revertitparrot.gif","./imagens/tripletsparrot.gif","./imagens/unicornparrot.gif"]
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
    return listaEmbaralhada
}
function colocarCartas(){
    gerarCartas()
    const inputdeCartasCima = document.querySelector(".cima")
    let contador=0 
    while(contador<quantasCartas/2){
        inputdeCartasCima.innerHTML +=`
            <button class="carta" onclick="virar(this)">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" class="display" >
                <img src="${listaEmbaralhada[contador]}" width="90px" height="90px" class="gif escondido">
            </button>`
    contador++
    }
    const inputdeCartasBaixo = document.querySelector(".baixo") 
    while(contador<quantasCartas){
        inputdeCartasBaixo.innerHTML +=`
            <button class="carta" onclick="virar(this)">
                <img src="/imagens/front.png" alt="" width="100px" height="100px" class="display">
                <img src='${listaEmbaralhada[contador]}'' width="90px" height="90px" class="gif escondido">
            </button>`
    contador++
    }
}
function virar(element){
    if(element == CartaValida1){
        return CartaValida1
    }

    element.querySelector(".display").classList.toggle("escondido")
    element.querySelector(".gif").classList.toggle("escondido")

    contadordeCartas++

    if(contadordeCartas==1){
        CartaValida1 = element
        return CartaValida1 
    }
    else if(contadordeCartas==2){ 
        carta1 = CartaValida1.innerHTML
        CartaValida2 = element
        carta2 = CartaValida2.innerHTML
        console.log(carta1)
        console.log(carta2)
        contadordeCartas = 0

        if(carta1==carta2){
            CartasAcertadas++
            if(CartasAcertadas == quantasCartas/2){
                function eliminar(){
                
                    CartaValida1.innerHTML =""
                    CartaValida2.innerHTML= ""
                    CartaValida1.classList.add("escondido2")
                    CartaValida2.classList.add("escondido2")
                }
                eliminar()
                alert(`Parabens! Você completou o jogo em ${(contadordeJogadas+1*2)}`)
            }else{    
            function eliminar(){
                
                CartaValida1.innerHTML =""
                CartaValida2.innerHTML= ""
                CartaValida1.classList.add("escondido2")
                CartaValida2.classList.add("escondido2")
            }
            setTimeout(eliminar,800);
            
        }
        }else{
            function esconderCarta(){

                CartaValida1.querySelector(".gif").classList.add("escondido")
                CartaValida1.querySelector(".display").classList.remove("escondido")
                
                CartaValida2.querySelector(".gif").classList.add("escondido")
                CartaValida2.querySelector(".display").classList.remove("escondido")
            }
            setTimeout(esconderCarta,1200);
        }
        
    }
    contadordeJogadas++
    return CartaValida1
}
