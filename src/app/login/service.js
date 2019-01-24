export default class LoginService {

    constructor($http, BASE_URL, ContextoService, $state) {
        this.$http = $http;
        this.$state = $state;
        this.baseUrl = `${BASE_URL}/auth`;
        this.ContextoService = ContextoService;
    }

    logar(usuario) {
        return this.$http.post(`${this.baseUrl}/login`, usuario)
            .then(response => {
                this.ContextoService.setUsuario(response.data.usuario);
                this.ContextoService.setToken(response.data.token);
                this.$state.go('app.produtos');
            })
            .catch(console.log);
    }

    save(data) {
        return this.$http.post(`${this.baseUrl}`, data)
            .then(response => response.data);
    }
}

LoginService.$inject = ['$http', 'BASE_URL', 'listthings.ContextoService', '$state'];