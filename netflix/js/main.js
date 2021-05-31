const botao = document.querySelector('[data-botao]')

botao.addEventListener('click', ()=>{
    const cabecalho = document.querySelector('[data-container]')
    cabecalho.classList.toggle('altura-menu')
    
    const nav = document.querySelector('.cabecalho__menu')
    nav.classList.toggle('botao-acionado')

    
})