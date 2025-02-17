const burgerButton = document.querySelector('.header__burger-button')
const mobileMenu = document.querySelector('.mobile-overlay')

export function showModal() {
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.remove('visually-hidden')
    document.body.style.overflow = 'hidden'
  })
}
