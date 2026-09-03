console.log("JavaScript carregado!");

const busca = document.querySelector("#buscar");

const cards = document.querySelectorAll(".projeto-card");

const botoes = document.querySelectorAll(".btn-filtro");

console.log(busca);
console.log(cards);
console.log(botoes);

botoes.forEach(function (botao){
botao.addEventsListner('click', function(){
    /*console.log("Clique!")*/
    alert("Cliquei!")
    });
});