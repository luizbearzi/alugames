function alterarStatus(id) {
    let clicaBotao = document.getElementById(`game-${id}`);
    let imagem = clicaBotao.querySelector('.dashboard__item__img');
    let botao = clicaBotao.querySelector('.dashboard__item__button');

   if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
   } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
   }

}