import './node_modules/the-new-css-reset/css/reset.css'
import './style.css'

const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const collegeDegrees = document.querySelector('.brand')

const initMenu = () => {
  if (window.innerWidth < 768) {
    menu.classList.add('hidden')
    collegeDegrees.style.top = 50;
    collegeDegrees.style.paddingBottom = 20;
  } else {
    menu.classList.remove('hidden')
  }
}

menuToggle.addEventListener('click', () => menu.classList.toggle('hidden'))
window.addEventListener('resize', initMenu)

initMenu()