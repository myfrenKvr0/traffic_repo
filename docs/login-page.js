const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "wakanda" && password === "FOREVER") {
        alert("You have successfully logged in.");
        location.replace("https://myfrenkvr0.github.io/traffic_repo/");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})