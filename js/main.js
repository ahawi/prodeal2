function restrictedInput() {
  const restrictedInputs = document.querySelectorAll(".restricted-input");

  restrictedInputs.forEach((input) => {
    input.addEventListener("keypress", function (event) {
      if (event.key === "+" || event.key === "-") {
        event.preventDefault();
      }
    });
  });
}

function wrapLastTwoItems() {
  const calculatorBody = document.querySelector(".calculator__body");
  const items = document.querySelectorAll(".calculator__item");
  const existingWrapper = document.querySelector(".calculator__wrapper");

  if (window.innerWidth >= 480 && window.innerWidth < 825) {
    if (!existingWrapper) {
      const wrapper = document.createElement("div");
      wrapper.className = "calculator__wrapper";
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      wrapper.style.justifyContent = "space-between";
      wrapper.style.rowGap = "15px";
      wrapper.style.flex = "1";

      wrapper.appendChild(items[1]);
      wrapper.appendChild(items[2]);

      calculatorBody.appendChild(wrapper);
    }
  } else {
    if (existingWrapper) {
      while (existingWrapper.firstChild) {
        calculatorBody.appendChild(existingWrapper.firstChild);
      }
      calculatorBody.removeChild(existingWrapper);
    }
  }
}

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

  if (window.innerWidth <= 1023) {
    if (aboutDescription) {
      aboutBody.appendChild(aboutDescriptionInfo);
      aboutDescriptionInfo.style.order = "-1";

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

restrictedInput();
hideLayout();
wrapLastTwoItems();

window.addEventListener("resize", hideLayout);
window.addEventListener("resize", wrapLastTwoItems);
