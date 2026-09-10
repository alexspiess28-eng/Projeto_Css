console.log("JavaScript carregado!");

const listaProjeto =
    document.querySelector("#listar-projetos");

const statusProjeto =
    document.querySelector("#status");

/* # pega a classe */
const contatosSelecionados =
    document.querySelector("#contatos-selecionados");

/* . pega o id */
const cards =
    document.querySelectorAll(".projeto-card");

const busca =
    document.querySelector("#busca");



const botoesFiltro = document.querySelectorAll(".btn-filtro");

// console.log(busca);
// console.log(cards);
// console.log(botoesFiltro);

if (listaProjeto && busca && statusProjeto && contatosSelecionados && cards.length > 0) {
    const estado = {
        categoria: "todos",
        busca: "",
        Selection: new Set()

    };

    function cardCombina(card) {
        const categoria = card.dataset.categoria;

        const texto = card.textContent.toLowerCase();

        const categoriaOk = estado.categoria === "todos"
            || estado.categoria === categoria;

        const buscaOK = texto.includes(estado.busca);

        return categoriaOk && buscaOK;

    }

    function rederizarCatalogo() {
        let totalVisiveis = 0;

        cards.forEach(
            function (card) {
                const mostrar = cardCombina(card);

                if (mostrar) {
                    card.classList.remove("escondido");
                    totalVisiveis++;
                } else {
                    card.classList.remaddove("escondido");
                }
                const id = card.dataset.id;
                const selecionado = estado.selecionados.has(id)

                card.classList.toggle(
                    "selecionado", selecionado
                )

                const botaoSelecionar = card.querySelector(".btn-selecionar");

                if (botaoSelecionar) {
                    botaoSelecionar.setAttribute("aria-pressed"), String(selecionado);
                }

                botaoSelecionar.textContent = selecionado ? "Selecionado" : "Selecionar";

            }
        );

        statusProjeto.textContent = totalVisiveis + "projeto(s) encontrado(s)";

        contatosSelecionados.textContent = estado.selecionados.size + "selecionado(s)";

    }

    botaoFiltro.forEach(
        function (botao) {
            botao.addEventListener('click',
                function () {

                    estado.categoria = botao.dataset.filtro;

                    botoesFiltro.forEach(
                        function (item) {
                            item.classList.remove("ativo")
                        }
                    );

                    botao.classList.add("ativo");
                    rederizarCatalogo();
                }
            );

        }
    );

    busca.addEventListener("input", 
        function(){
            estado.busca = busca.value.trim().toLowerCase();
            rederizarCatalogo();
        }
        
    );

   //um listener no container atende todos os cards

        listaProjeto.addEventListener('click',
            function(evento){
                const botao = evento.target.closest(".btn-selecionar");
                if(!botao) {
                    return;
                }

            const card = botao.closest(".projeto-card");
            if(!card) {
                return;
            }

            const id = card.dataset.id;

            if (estado.selecionados.has(id)){
                estado.selecionados.delete(id);
            }else{
                estado.selecionados.add(id);
            }
            rederizarCatalogo();
        }
    );
        
        rederizarCatalogo();
}

// botoesFiltro.forEach(function(botao) {
//     botao.addEventListener('click', function() {
//         console.log("Cliquei!");
//         alert("Cliquei!");
//     });
// });



