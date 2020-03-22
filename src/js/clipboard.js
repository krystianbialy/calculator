const clipboardTextarea = document.querySelector(
  '#calculator__clipboard-textarea'
);
const clipboardCleaning = document.querySelector(
  '#calculator__clipboard-cleaning'
);

clipboardCleaning.onclick = () => {
  clipboardTextarea.value = '';
};
