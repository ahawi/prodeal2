export function applyIMask() {
  const inputNumber = document.querySelector('[data-tel-input]')
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  }
  const mask = IMask(inputNumber, maskOptions)
}
