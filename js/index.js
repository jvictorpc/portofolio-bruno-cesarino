const btnMenu = document.querySelector('.btn-menu');


// função que adiciona ou remove a classe active no elemento nav, fazendo o menu aparecer e desaparecer
const toggleMenu = () => {
    const nav= document.querySelector('.nav');
    nav.classList.toggle('active');
       
}


btnMenu.addEventListener('click', (event) =>{
    event.preventDefault();
    toggleMenu();
})

btnMenu.addEventListener('touchstart', (event) =>{
    event.preventDefault();
    toggleMenu();
})