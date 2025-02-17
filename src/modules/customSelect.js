export function customSelect() {
  const customSelects = document.querySelectorAll('.js-choice')
  customSelects.forEach((select) => {
    const customPlaceholder = select.dataset.placeholder
    new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: true,
      placeholderValue: customPlaceholder
    })
  })
}
