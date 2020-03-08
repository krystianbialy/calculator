const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  document.querySelector('#footer__date').innerHTML = year;
};

getDate();
