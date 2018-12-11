export default class LoginController{
    constructor(LoginService){
        this.service = LoginService;
        this.usuario = {};
    }

    login() {
        this.service.logar(this.usuario);
    }
}

LoginController.$inject = ['LoginService'];