const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  document.querySelector(
    '#calculator__informations-text-date'
  ).innerHTML = year;
};

getDate();
