import"./index.html";import{customSelect}from"./modules/customSelect.js";import"./styles/styles.scss";import{restrictedInput}from"./modules/restrictedInput.js";import{hideLayout}from"./modules/hideLayout.js";import{applyIMask}from"./modules/applyIMask.js";import{showModal}from"./modules/showModal.js";restrictedInput(),hideLayout(),applyIMask(),customSelect(),showModal(),window.addEventListener("resize",hideLayout);