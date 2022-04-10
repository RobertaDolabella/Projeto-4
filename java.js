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
    const inputdeCartas = document.querySelector(".cima").querySelector("ul")
    console.log(inputdeCartas)
    let contador=0 
    console.log(quantasCartas)
    while(contador<quantasCartas/2){
        inputdeCartas.innerHTML +=`<li> <div class="carta">
        <img src="/imagens/front.png" alt="" width="100px" height="100px">
    </div></li>`
    contador++
    }
}
colocarCartas()

function escolherCartas(){

}
    


///function pegarImagens(){
 //   const listadeFiguras=[
   //     {imagem:"", posicao:"", status:""}]
    //const listaHtml = document.querySelector(".gif").querySelectorAll("img")
    //const objetosdeFiguras = [{
     //   imagem:"", posicao:"", status:""
    //}]
//}
//pegarImagens()
