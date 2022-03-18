import { CreateConversationForm } from "./createConvesationForm.js";

class ConversationList {
    container = document.createElement('div');

    btnCreateConversation = document.createElement('button');
    creatConversationForm = new CreateConversationForm();

    constructor() {

        this.btnCreateConversation.innerHTML = "+ Create Conversation";
        this.container.classList.add("btnCreateConversation");
        this.btnCreateConversation.addEventListener("click", this.handleVisible);

        this.container.appendChild(this.btnCreateConversation);
        this.container.appendChild(this.creatConversationForm.container);

    };

    handleVisible = () => {
        this.creatConversationForm.setVisible(true);
    };

}

export { ConversationList };