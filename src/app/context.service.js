class ContextService {
    constructor($window) {
        this.$window = $window;
        this.usuario = null;
        this.token = null;
    }

    setUsuario(usuario) {
        console.log(usuario);
        this.usuario = usuario;
        this.$window.localStorage.setItem('USUARIO', this.usuario);
    }

    getUsuario() {
        if (!this.usuario) {
            this.usuario = this.$window.localStorage.getItem('USUARIO');
        }
        return this.usuario;
    }

    setToken(token) {
        console.log(token);
        this.token = token;
        this.$window.localStorage.setItem('TOKEN', this.token);
    }

    getToken() {
        if (!this.token){
            this.token = this.$window.localStorage.getItem('TOKEN');
        }
        return this.token;
    }

}

ContextService.$inject = ['$window'];

module.exports = ContextService;
