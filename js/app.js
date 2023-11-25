function alterarStatus(id) {
    let clicaBotao = document.getElementById(`game-${id}`);
    let imagem = clicaBotao.querySelector('.dashboard__item__img');
    let botao = clicaBotao.querySelector('.dashboard__item__button');
    let nomeJogo = clicaBotao.querySelector('.dashboard__item__name');

    alert(` fazendo solo e foi o nome é ${nomeJogo.textContent}`);

}