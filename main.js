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

//sombra da do menu superior quando estiver em rolamento
const header = document.querySelector('#header')
//pegando o deslocamento da altura do objeto
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  //se o scroll do eixo y passou da altura do header
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})

// TESTIMONIAL CAROUSEL SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true
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
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
