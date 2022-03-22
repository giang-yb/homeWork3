import { ConversationInfo } from "../chat/conversationInfor.js";
import { ConversationList } from '../chat/conversationList.js'

class Chat {

    activeConversation;

    container = document.createElement('div');
    btnLogOut = document.createElement("button");

    conversationList = new ConversationList();
    conversationInfor = new ConversationInfo();

    constructor() {
        this.container.appendChild(this.conversationList.container);

        this.conversationList.setOnConversationItemClick(
            this.setActiveConversation
        );

        this.container.appendChild(this.conversationInfor.container);
        this.subcribeConversation();

        // this.container.innerHTML = "Chat";
        // this.btnLogOut.innerHTML = "Log out";

        // this.container.appendChild(this.btnLogOut);
        // this.btnLogOut.addEventListener("click", this.handleLogOut);
    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        console.log({ conversation });
        this.conversationInfor.setName(conversation.name);
        this.conversationList.setStyleActiveConversation(conversation);
        //this.conversationList.setOnConversationItemClick();
    }

    subcribeConversation = () => {
        db.collection("conversations")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("New conversation: ", change.doc.data());

                        this.conversationList.handleCreateConversationAdded(
                            change.doc.id,
                            change.doc.data().name,
                            change.doc.data().users
                        )
                    }
                    if (change.type === "modified") {
                        console.log("Modified  ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("Removed  ", change.doc.data());
                    }
                });
            });
    };

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