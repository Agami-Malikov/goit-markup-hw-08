 
  (() => {
  const refs = {
    openModalBtn: document.querySelector("[data-navigation-open]"),
    closeModalBtn: document.querySelector("[data-navigation-close]"),
    modal: document.querySelector("[data-navigation]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("header__navigation--active");
  }
})();
