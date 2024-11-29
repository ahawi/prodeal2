function restrictedInput() {
  const restrictedInputs = document.querySelectorAll(".restricted-input");

  restrictedInputs.forEach((input) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "+" || event.key === "-") {
        event.preventDefault();
      }
    });
  });
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

function formatPhoneNumber(input) {
  input.addEventListener("input", function () {
    let value = input.value.replace(/\D/g, "");
    let formattedValue = "";
    let index = 0;
    let maxLength;

    if (value[0] === "7") {
      formattedValue += "+7";
      maxLength = 22;
      index = 1;
    } else if (value[0] === "8") {
      formattedValue += "8";
      maxLength = 21;
      index = 1;
    } else {
      input.value = formattedValue;
      return;
    }

    while (index < value.length && formattedValue.length < maxLength) {
      if (index === 1) formattedValue += " (";
      else if (index === 4) formattedValue += ") ";
      else if (index === 7 || index === 9) formattedValue += " - ";
      formattedValue += value[index];
      index++;
    }

    input.value = formattedValue;
  });
}

document.querySelectorAll("[data-tel-input]").forEach(formatPhoneNumber);

restrictedInput();
hideLayout();

window.addEventListener("resize", hideLayout);

function formatInput(input) {
  input.addEventListener("input", function () {
    let value = input.value.replace(/\D/g, "");

    input.value = value;
  });
}

// function formatInput(input) {
//   input.addEventListener("input", function () {
//     let value = input.value.replace(/[^0-9,]/g, "");

//     // Присваиваем отформатированное значение обратно в input
//     input.value = value;
//   });
// }

// // Выбираем все элементы с атрибутом data-js-parameters и применяем к ним функцию formatInput
// document.querySelectorAll("[data-js-parameters]").forEach(formatInput);
