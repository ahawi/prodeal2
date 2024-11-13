function adjustLayout() {
  const calculatorBody = document.querySelector(".calculator__body");
  const items = document.querySelectorAll(".calculator__item-shipping");
  const existingWrapper = document.querySelector(".calculator__wrapper");

  if (window.innerWidth >= 480 && window.innerWidth < 825) {
    if (!existingWrapper) {
      const wrapper = document.createElement("div");
      wrapper.className = "calculator__wrapper";
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      wrapper.style.justifyContent = "space-between";
      wrapper.style.rowGap = "15px";

      // Перемещаем элементы внутрь новой обертки
      items.forEach((item) => {
        wrapper.appendChild(item);
      });

      calculatorBody.appendChild(wrapper);
    }
  } else {
    if (existingWrapper) {
      // Перемещаем все элементы обратно в основной контейнер
      while (existingWrapper.firstChild) {
        calculatorBody.appendChild(existingWrapper.firstChild);
      }
      calculatorBody.removeChild(existingWrapper);
    }
  }
}

// Проверяем ширину при загрузке страницы
adjustLayout();

// Добавляем обработчик события для изменения размера окна
window.addEventListener("resize", adjustLayout);


