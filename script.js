// Código para movimentar o botão "Não ver" aleatoriamente
const botaoNaoVer = document.getElementById('nao-ver');

botaoNaoVer.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - botaoNaoVer.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - botaoNaoVer.offsetHeight));
    
    botaoNaoVer.style.left = `${x}px`;
    botaoNaoVer.style.top = `${y}px`;
});
