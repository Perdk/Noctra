const listaPerguntas = document.querySelectorAll('.lista-perguntas li');


listaPerguntas.forEach((li)=>{
    const botao = li.querySelector('button');
    const resposta = li.querySelector('p');

    botao.addEventListener('click',()=>{
        resposta.classList.toggle('ativa');
    });
});

