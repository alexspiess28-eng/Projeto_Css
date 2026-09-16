<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Início - Meu Projeto Web</title>

    <link rel="stylesheet" href="css/style.css">

    <script src="js/script.js" defer></script>
</head>

<body>

    <header class="cabecalho">

        <div class="container cabecalho-conteudo">

            <h1>Meu Projeto Web</h1>

            <nav
                class="nav"
                aria-label="Navegação principal"
            >

                <a
                    class="ativo"
                    href="index.html"
                    aria-current="page"
                >
                    Início
                </a>

                <a href="sobre.html">
                    Sobre
                </a>

                <a href="contato.html">
                    Contato
                </a>

            </nav>

        </div>

    </header>


    <main class="container">

        <section class="secao">

            <h2>Bem-vindo ao projeto</h2>

            <p>
                Este projeto está sendo desenvolvido
                durante as aulas de Front-end.
            </p>

        </section>


        <section
            id="projetos"
            class="secao"
        >

            <div class="secao-cabecalho">

                <div>
                    <p class="tag">Catálogo</p>
                    <h2>O que estamos aprendendo?</h2>
                </div>

                <span
                    id="contador-selecionados"
                    class="contador-projetos"
                >
                    0 selecionado(s)
                </span>

            </div>


            <div class="campo-busca">

                <label for="busca">
                    Buscar projeto
                </label>

                <input
                    type="search"
                    id="busca"
                    placeholder="Digite HTML, CSS ou Responsividade"
                >

            </div>


            <p
                id="status"
                class="status"
                role="status"
                aria-live="polite"
            >
                4 projetos encontrados.
            </p>


            <div
                class="filtros"
                aria-label="Filtros do catálogo"
            >

                <button
                    type="button"
                    class="btn-filtro ativo"
                    data-filtro="todos"
                >
                    Todos
                </button>

                <button
                    type="button"
                    class="btn-filtro"
                    data-filtro="html"
                >
                    HTML
                </button>

                <button
                    type="button"
                    class="btn-filtro"
                    data-filtro="css"
                >
                    CSS
                </button>

                <button
                    type="button"
                    class="btn-filtro"
                    data-filtro="responsivo"
                >
                    Responsivo
                </button>

            </div>


            <div
                id="lista-projetos"
                class="grid-cards"
            >

                <article
                    class="card projeto-card"
                    data-id="html-semantico"
                    data-categoria="html"
                >

                    <h3>HTML Semântico</h3>

                    <p>
                        Projeto criado para praticar
                        header, nav, main, section,
                        article e footer.
                    </p>

                    <button
                        type="button"
                        class="btn-selecionar"
                        aria-pressed="false"
                    >
                        Selecionar
                    </button>

                </article>
