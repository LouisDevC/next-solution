// váriáveis
const images = [
    '../images/carrossel/A.jpg',
    '../images/carrossel/B.jpg',
    '../images/carrossel/C.jpg'
];
const container = document.querySelector('#container-items')

let index = 0;

const services = document.querySelector('#services')

const lArrow = document.querySelector('#left-arrow')
const rArrow = document.querySelector('#right-arrow')
const depoimento = document.querySelector('#depoimento')
const contato = document.querySelector('#contato')
// Função para trocar a imagem
function changeImage() {
    container.src = images[index];
    index = (index + 1) % images.length;
}

// Inicia o carrossel
setInterval(changeImage, 3000);
rArrow.addEventListener('click',() =>{
    services.style.flexDirection = 'row-reverse'
})
lArrow.addEventListener('click',() =>{
    services.style.flexDirection = 'row'
})
depoimento.addEventListener('click', (e) =>{
    e.preventDefault()

    alert('Empresa ficticia, devido isso não existe avaliações')
})
contato.addEventListener('click', (e) =>{
    e.preventDefault()

    window.scrollTo({
        behavior: 'smooth',
        top: document.body.scrollHeight,
    })
})