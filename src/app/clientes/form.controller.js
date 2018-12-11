export default class FormController {

    constructor(ClienteService, $stateParams, $state) {
        this.service = ClienteService;
        this.$state = $state;
        if ($stateParams.id) {
            this.service.getOne($stateParams.id)
                .then(registro => {
                    this.record = registro;
                }).catch(console.error);
        }
    }

    save() {
        this.service.save(this.record)
            .then(() => {
                this.$state.go('app.cliente.list')
            }).catch(console.error);
    }
}

FormController.$inject = [
    'ClienteService', 
    '$stateParams',
    '$state'
];
