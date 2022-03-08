import { Login } from "./login.js"

const app = document.querySelector("#app");

const setScreen = (container) => {
    app.innerHTML = "";
    app.appendChild(container);
}

const loginScreen = new Login();
app.appendChild(loginScreen.container);

export {setScreen}