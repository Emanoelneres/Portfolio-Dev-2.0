const botaoInicio = document.querySelector(".link-inicio")//Botão da seção inicial mapeado
const botaoMeConheca = document.querySelector(".link-me-conheca")//Botão me conheça mapeado
const botaoProjetos = document.querySelector(".link-projetos")//Botão de Projetos mapeado
const botaoHabilidades = document.querySelector(".link-habilidades")//Botão da seção habilidades
const botaoContato = document.querySelector(".link-contato")//Botão da seção contato

const secaoInicial = document.getElementById("container-inicio")//Seção inicial mapeado
const secaoMeConheca = document.getElementById("container-me-conheca")//Seção me conheça mapeado
const secaoProjetos = document.getElementById("container-projetos")//Seção projetos mapeado
const secaoHabilidades = document.getElementById("container-habilidades")//Seção habilidades mapeado
const secaoContato = document.getElementById("section-contato")//Seção Contatos mapeado
//Seção inicial 
botaoInicio.addEventListener("click", function () {//Função criada para o clique no botão

    const secaoAtual = document.querySelector(".secao.ativa");//Pega as duas classes como .secao e .ativa 

    secaoAtual.classList.remove("ativa");//Seleciona a seção que está com a classe ativa e remove com o classlist

    secaoInicial.classList.add("ativa");//Adiciona a classe .ativa na seção me conheça
});



//Seção me conheça
botaoMeConheca.addEventListener("click", function () {//Função criada para o clique no botão

    const secaoAtual = document.querySelector(".secao.ativa");//pega a seção com essas duas classes 

    secaoAtual.classList.remove("ativa");//seleciona a seção que está com a classe ativa e remove com o classlist

    secaoMeConheca.classList.add("ativa");//adiciona a classe .ativa na seção me conheça
});

//Seção Projetos
botaoProjetos.addEventListener("click", function () {//Função criada para o clique no botão

    const secaoAtual = document.querySelector(".secao.ativa");//pega a seção com essas duas classes 

    secaoAtual.classList.remove("ativa");//seleciona a seção que está com a classe ativa e remove com o classlist

    secaoProjetos.classList.add("ativa");//adiciona a classe .ativa na seção projetos
});

//seção Habilidades
botaoHabilidades.addEventListener("click", function () {//Função criada para o clique no botão

    const secaoAtual = document.querySelector(".secao.ativa")//Pega a seção com essas duas classes

    secaoAtual.classList.remove("ativa");//seleciona a seção que está com a classe ativa e remove com o classlist

    secaoHabilidades.classList.add("ativa");s//adiciona a classe .ativa na seção projeto

});

//Seção Contato
botaoContato.addEventListener("click", function () {//Função criada para o clique no botão

    const secaoAtual = document.querySelector(".secao.ativa")//Pega a seção com essas duas classes

    secaoAtual.classList.remove("ativa");//seleciona a seção que está com a classe ativa e remove com o classlist

    secaoContato.classList.add("ativa");//adiciona a classe .ativa na seção projeto

});







