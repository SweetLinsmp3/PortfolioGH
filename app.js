const botao = document.querySelector('.btn');
const projeto = [
    {
        linktexto: 'linktexto',
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

botao.addEventListener('click', function() {
  atual++;
    if (atual >= projeto.length) {
    atual = 0;}
    document.querySelector('#linktexto').href = projeto[atual].linktexto;
    document.querySelector('#titulo').textContent = projeto[atual].titulo;
    document.querySelector('#imagemprojeto').src = projeto[atual].imagemprojeto;
    document.querySelector('#paragrafo').textContent = projeto[atual].paragrafo;
});

