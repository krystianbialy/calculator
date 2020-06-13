const getDate = element => {
  const today = new Date();
  const year = today.getFullYear();
  document.querySelector(element).innerHTML = year;
};

export { getDate };
