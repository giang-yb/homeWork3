import { inputCommon } from "../common/inputCommon.js";
import { Modal } from "../common/modal.js";

class CreateConversationForm {
    container = document.createElement('div');

    modal = new Modal();

    form = document.createElement('form');
    // First: current user
    conversationNameInput = new inputCommon(
        "Conversation Name",
        "text",
        "Enter your conversation name",
        "conversationName"
    );

    constructor() {
        this.container.appendChild(this.modal.container);
        this.container.style.visibility = "hidden";
        this.container.classList.add("hiddenForm");

        this.modal.setHeader("Create conversation");
        this.modal.setBody(this.form);

        this.modal.setOnclickCancel(() => {
            this.setVisible(false);
        });

        this.modal.setOnclickCreate(this.handleCreateConversation);

        this.conversationNameInput.container.classList.add("conversationNameInput");

        this.form.appendChild(this.conversationNameInput.container);
    }

    handleCreateConversation = () => {
        console.log(firebase.auth())
        const name = this.conversationNameInput.getValue();
        db.collection("conversations").add({
            name: name,
            users: [firebase.auth().currentUser.email],
            //nó bị ở đây a ạ

        });
    };

    setVisible = (visible) => {
        if (visible) this.container.style.visibility = "visible";
        else this.container.style.visibility = "hidden";
    };
}

export { CreateConversationForm };