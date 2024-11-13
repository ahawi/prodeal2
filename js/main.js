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

function hideLayout() {
  const aboutBody = document.querySelector(".about__body");
  const aboutDescription = document.querySelector(".about__description");
  const aboutDescriptionInfo = document.querySelector(
    ".about__description-info"
  );
  const aboutDescriptionBlockquote = document.querySelector(
    ".about__description-blockquote"
  );
  const aboutProperties = document.querySelector(".about__properties");

  // Проверяем ширину окна
  if (window.innerWidth <= 1023) {
    // Если элемент about__description существует и элементы не перемещены
    if (aboutDescription) {
      // Перемещаем дочерние элементы в about__body

      aboutBody.appendChild(aboutDescriptionInfo);
      aboutDescriptionInfo.style.order = "-1"; // Устанавливаем order для about__description-info

      aboutBody.appendChild(aboutDescriptionBlockquote);
      aboutDescriptionBlockquote.style.order = "1";

      aboutProperties.style.order = "0";

      aboutBody.removeChild(aboutDescription);
    }
  } else {
    if (!aboutDescription) {
      const aboutDescription = document.createElement("div");
      aboutDescription.className = "about__description";
      aboutDescription.appendChild(aboutDescriptionInfo);
      aboutDescription.appendChild(aboutDescriptionBlockquote);

      aboutBody.appendChild(aboutDescription);


      aboutDescriptionInfo.style.order = "";
      if (aboutProperties) {
        aboutProperties.style.order = "";
      }
    }
  }
}

// Проверяем ширину при загрузке страницы
hideLayout();

// Добавляем обработчик события для изменения размера окна
window.addEventListener("resize", hideLayout);
