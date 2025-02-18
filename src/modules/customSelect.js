import 'choices.js/public/assets/styles/choices.css'
import Choices from 'choices.js'

export function customSelect() {
  const customSelects = document.querySelectorAll('.js-choice')
  customSelects.forEach((select) => {
    new Choices(select, {
      searchEnabled: false,
      itemSelectText: ''
    })
  })
}
