const signUpButton = document.querySelector("#signUp");
const singInButton = document.querySelector("#signIn");
const container = document.querySelector("#container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

singInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
