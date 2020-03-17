const changeMode = document.querySelector('#change-mode');
const body = document.querySelector('#body');

changeMode.onclick = () => {
  changeMode.classList.toggle('change-mode-dark-mode');
  body.classList.toggle('body-dark-mode');
};
