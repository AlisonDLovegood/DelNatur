//TOGGLE
const nav = document.querySelector('#header nav')
//procura dentro do nav tudo que tiver toggle como class
const toggle = document.querySelectorAll('nav .toggle')
//console serve p registrar no console do navegador um comando sem necessitar executar a linha de comando diretamente nele
//console.log(toggle)

//para cada toggle cria-se uma constante element
for (const element of toggle) {
  //função de adicionar um evento ouvinte/click do mouse
  element.addEventListener('click', function () {
    //pega na lista de classes do nav e faz uma troca do show, tirando e pondo, esse toggle em especifico é a função da dom
    nav.classList.toggle('show')
  })
}

//esconder o menu ao clicar em uma das opções
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//sombra da barra do menu superior quando estiver em rolamento
const header = document.querySelector('#header')
//pegando o deslocamento da altura do objeto
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  //se o scroll do eixo y passou da altura do header
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

// TESTIMONIAL CAROUSEL SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLL REVIEW
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand
  `,
  { interval: 100 }
)

// BACK TO TOP BUTTON
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 696) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// ATIVAR MENU CONFORME SESSÃO VISÍVEL
//pegando todas as sessões que contenham ID em seu nucleo
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  // pegando da janela o deslocamento do y, pega também todo o tamanho da janela e divide ela toda por 8 e pegando apenas 4 pedacinhos das 8 partes, isso sera somado ao deslocamento do Y
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  //para cada sessao das sessoes
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    //quando o checkpoint for menor ou igual ao topo com a altura
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      //procurando o a que tenha um href especifico
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//when scroll chama as duas funções dependentes dele
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

// MUDANDO O HUE
//const wand = getComputedStyle(document.documentElement).getPropertyValue(
//  '--hue'
//)
//function randomNumber() {
//  const random = Math.floor(Math.random() * 260)
//}
//randomNumber()

function changeHue() {
  const random = Math.floor(Math.random() * 261)
  document.documentElement.style.setProperty('--hue', random)
}

//const wand = document.querySelector('a .wand')
//wand.addEventListener('click', function () {
//  changeHue()
//})
