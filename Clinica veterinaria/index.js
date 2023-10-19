const elementos = document.querySelectorAll('.duvida');

elementos.forEach(duvida => {
  duvida.addEventListener('click', () => {
    duvida.classList.toggle('ativo');
  });
});