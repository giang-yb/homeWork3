import { ConversationList } from '../chat/conversationList.js'

class Chat {
    container = document.createElement('div');
    btnLogOut = document.createElement("button");

    conversationList = new ConversationList();

    constructor() {

        this.container.appendChild(this.conversationList.container);
        // this.container.innerHTML = "Chat";
        // this.btnLogOut.innerHTML = "Log out";

        // this.container.appendChild(this.btnLogOut);
        // this.btnLogOut.addEventListener("click", this.handleLogOut);
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