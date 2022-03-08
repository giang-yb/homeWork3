import { inputCommon } from "./common/inputCommon.js";
import { inputCheckBox } from './common/inputCheckBox.js';
import { Login } from './login.js';
import { setScreen } from './index.js';


class Register {
    image = document.createElement("img");
    container = document.createElement("div");
    title = document.createElement('h3');

    form = document.createElement('form');

    nameDiv = document.createElement('div');
    emailDiv = document.createElement('div');
    passDiv = document.createElement('div');
    passConfirmDiv = document.createElement('div');

    iconName = document.createElement('div');
    iconUser = document.createElement('div');
    iconPass = document.createElement('div');
    iconPassConfirm = document.createElement('div');

    inputName = new inputCommon("name", "Enter your name", "inputName");
    inputEmail = new inputCommon ("email", "Enter your email", "inputEmail");
    inputPassword = new inputCommon ("password", "Enter your password", "inputPassword");
    inputConfirmPassword = new inputCommon ( "password", "Enter your confirm password", "inputConfirmPassword");

    lableCheckBox = document.createElement('span');
    inputCheckBox = new inputCheckBox('checkbox', 'remember', 'Agree statement');
    
    rule = document.createElement('a');

    actionContainer = document.createElement("div");
    btnLogin = document.createElement("button");
    btnRegister = document.createElement("button");

    constructor() {
        this.title.innerHTML = "Register";
        
        this.image.src = "./img/signin-image.jpg"

        this.container.appendChild(this.form);

        this.lableCheckBox.innerHTML = "I agree all statement ";
        this.lableCheckBox.classList.add('check');

        this.rule.innerHTML = '<a href=""> Terms of service </a>';
        this.rule.classList.add('rule');

        this.lableCheckBox.appendChild(this.rule);

        this.form.appendChild(this.title);

        //NAME
        this.nameDiv.classList.add('inputDiv');
        
        this.iconName.innerHTML = '<i class="fas fa-address-card"></i>';
        this.iconName.classList.add('infor');

        this.nameDiv.appendChild(this.iconName);
        this.nameDiv.appendChild(this.inputName.container);

        this.form.appendChild(this.nameDiv);

        //EMAIL
        this.emailDiv.classList.add('inputDiv');

        this.iconUser.innerHTML = '<i class="fas fa-user"></i>';
        this.iconUser.classList.add('infor');

        this.emailDiv.appendChild(this.iconUser);
        this.emailDiv.appendChild(this.inputEmail.container);

        this.form.appendChild(this.emailDiv);

        //PASSWORD
        this.passDiv.classList.add('inputDiv');
        
        this.iconPass.innerHTML = '<i class="fas fa-lock"></i>';
        this.iconPass.classList.add('infor');

        this.passDiv.appendChild(this.iconPass);
        this.passDiv.appendChild(this.inputPassword.container);

        this.form.appendChild(this.passDiv);


        this.passConfirmDiv.classList.add('inputDiv');
        
        this.iconPassConfirm.innerHTML = '<i class="fas fa-unlock-alt"></i>';
        this.iconPassConfirm.classList.add('infor');

        this.passConfirmDiv.appendChild(this.iconPassConfirm);
        this.passConfirmDiv.appendChild(this.inputConfirmPassword.container);

        this.form.appendChild(this.passConfirmDiv);



        //this.form.appendChild(this.inputName.container);
        // this.form.appendChild(this.inputEmail.container);
        // this.form.appendChild(this.inputPassword.container);
        // this.form.appendChild(this.inputConfirmPassword.container);

        this.form.appendChild(this.inputCheckBox.container);
        this.inputCheckBox.container.appendChild(this.lableCheckBox);

        this.inputCheckBox.container.classList.add('check');

        this.inputName.container.classList.add('infor')
        this.inputEmail.container.classList.add('infor');
        this.inputPassword.container.classList.add('infor');
        this.inputConfirmPassword.container.classList.add('infor');


        this.btnLogin.innerHTML = "Go to Login";
        this.btnLogin.classList.add("btn");
        this.btnRegister.innerHTML = "Register";
        this.btnRegister.classList.add("btn");

        this.container.classList.add("wrap");

        this.form.classList.add('form');
        
        this.btnLogin.addEventListener("click", (e) =>{
            e.preventDefault();
            const loginScreen = new Login();
            setScreen(loginScreen.container);
        })

        this.btnRegister.addEventListener("click", (e) => {
            e.preventDefault();
        })

        this.container.appendChild(this.image);
        this.form.appendChild(this.btnLogin);
        this.form.appendChild(this.btnRegister);
    }
}

export {Register}