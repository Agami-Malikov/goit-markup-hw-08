 
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

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-btn-on]"),
    closeModalBtn: document.querySelector("[data-btn-off]"),
    modal: document.querySelector("[data-btn1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("--active");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-btn-on]"),
    closeModalBtn: document.querySelector("[data-btn-off]"),
    modal: document.querySelector("[data-btn2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("--active");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-btn-on]"),
    closeModalBtn: document.querySelector("[data-btn-off]"),
    modal: document.querySelector("[data-btn3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("--active");
  }
})();

