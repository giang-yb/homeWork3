class Chat {
    container = document.createElement('div');
    btnLogOut = document.createElement("button");

    constructor() {
        this.container.innerHTML = "Chat";
        this.btnLogOut.innerHTML = "Log out";

        this.container.appendChild(this.btnLogOut);
        this.btnLogOut.addEventListener("click", this.handleLogOut);
    }

    handleLogOut = (e) => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Sign out successful");
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        });
    }
}

export { Chat };