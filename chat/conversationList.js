import { CreateConversationForm } from "./createConvesationForm.js";
import { ConversationItem } from './conversationItem.js';

class ConversationList {
    container = document.createElement('div');

    btnCreateConversation = document.createElement('button');
    creatConversationForm = new CreateConversationForm();
    onConversationItemClick;
    conversations = [];

    constructor() {
        this.btnCreateConversation.innerHTML = "+ Create Conversation";
        this.container.classList.add("btnCreateConversation");
        this.btnCreateConversation.addEventListener("click", this.handleVisible);
        this.container.appendChild(this.btnCreateConversation);
        this.container.appendChild(this.creatConversationForm.container);

    };

    setOnConversationItemClick = (listener) => {
        this.onConversationItemClick = listener;
    }

    handleCreateConversationAdded = (id, name, users) => {
        const conversation = new ConversationItem(id, name, users);

        conversation.setOnClick((id, name, users) => {

            this.onConversationItemClick({
                id:id,
                name:name,
                user:users,
            });
            
        });

        this.conversations.push(conversation);
        this.container.appendChild(conversation.container);
    }

    setStyleActiveConversation = (conversation) => {
        this.conversations.forEach((item) => {
          if (item.id === conversation.id) {
            item.setActiveHighlight(true);
          } else {
            item.setActiveHighlight(false);
          }
        });
      };

    handleVisible = () => {
        this.creatConversationForm.setVisible(true);
    };

}

export { ConversationList };