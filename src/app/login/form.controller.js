export default class FormController {

    constructor(LoginService, $stateParams, $state) {
        this.service = LoginService;
        this.$state = $state;
        if ($stateParams.id) {
            this.service.getOne($stateParams.id)
                .then(registro => {
                    this.record = registro;
                }).catch(console.error);
        }
    }

    save(usuario) {
        this.service.save(usuario)
            .then(() => {
                this.$state.go('login')
            }).catch(console.error);
    }
}

FormController.$inject = [
    'LoginService', 
    '$stateParams',
    '$state'
];
