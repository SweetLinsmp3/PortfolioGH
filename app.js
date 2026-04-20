'use strict';
/*Configurações do botão de alternar sites*/
const botao = document.querySelector('.btn');
const projeto = [
    {
        linktexto: 'https://sweetlinsmp3.github.io/FatecZlsitecronograma/',
        titulo: 'Recriação do site de DSM',
        imagemprojeto: 'source/dsm.png',
        paragrafo: 'Atividade realizada com base no site oficial da fatec sobre o curso de DSM. Apresenta também uma tabela da grade horária do primeiro e segundo semestre.'
    },
    {
        linktexto: 'https://sweetlinsmp3.github.io/Exerc-cio-Site-Tabela/',
        titulo: 'Site Tabela do Linkin Park',
        imagemprojeto: 'source/linkinpark.png',
        paragrafo: 'Apresenta todos os artistas que já participaram da banda Linkin Park, além de uma tabela com as respectivas datas dos shows.'
    }
];
let atual = 0;

if (botao) {
    botao.addEventListener('click', function() {
        atual++;
        if (atual >= projeto.length) {
            atual = 0;
        }
        document.querySelector('#linktexto').href = projeto[atual].linktexto;
        document.querySelector('#titulo').textContent = projeto[atual].titulo;
    document.querySelector('#imagemprojeto').src = projeto[atual].imagemprojeto;
    document.querySelector('#paragrafo').textContent = projeto[atual].paragrafo;
    });
};
/*Botão do tema escuro e claro*/
/*Salvar o tema durante a troca de páginas*/
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        document.body.className = temaSalvo;
    }
/*Para trocar o texto na troca de páginas*/
const botaoTema = document.querySelector('.botao-tema');
if (temaSalvo == "tema-escuro") {
    botaoTema.textContent = "Tema claro";
}else {
    botaoTema.textContent = "Tema escuro";
}
/*Adiciona um evento de clique ao botão, que alterna a classe 'tema-escuro' no corpo do documento.*/
botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');
    document.body.classList.toggle('tema-claro');
        localStorage.setItem('tema', document.body.className);
/*Dependendo da classe atual, o texto do botão é atualizado para indicar o tema oposto.*/
    var className = document.body.className;
    if(className == "tema-escuro"){
        botaoTema.textContent = "Tema claro";
    }else{
        botaoTema.textContent = "Tema escuro";
    }
/*Exibe no console do devtools o tema atual*/
    console.log('nome atual da classe: ' + className);
});