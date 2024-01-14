const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
  event.preventDefault();
  logInForm.classList.add(CLASSNAME_HIDDEN);
  const username = logInInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  logInForm.classList.remove(CLASSNAME_HIDDEN);
  logInForm.addEventListener("submit", onLogInSubmit);
} else {
  logInForm.classList.add(CLASSNAME_HIDDEN);
  paintGreeting(savedUsername);
}
