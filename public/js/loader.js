export const runLoader = () => {
  document.querySelector('.load').className += ' loader-main';
};
export const stopLoader = () => {
  document.querySelector('.load').classList.remove('loader-main');
};
