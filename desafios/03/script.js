const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
  event.preventDefault();
  form.classList.add("form-hide");
});
