export function restrictedInput() {
  const restrictedInputs = document.querySelectorAll('.restricted-input')

  restrictedInputs.forEach((input) => {
    input.addEventListener('keydown', function (event) {
      if (event.key === '+' || event.key === '-') {
        event.preventDefault()
      }
    })
  })
}
