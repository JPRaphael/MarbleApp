export default class FormController {

    constructor(EstoqueService, $stateParams, $state) {
        this.service = EstoqueService;
        this.$state = $state;
        if ($stateParams.id) {
            this.service.getOne($stateParams.id)
                .then(registro => {
                    this.record = registro;
                }).catch(console.error);
        }

        this.service.getProdutos()
            .then(produtos => {
                this.produto = produtos;
            }).catch(console.error);
    }

    save() {
        this.produto.forEach(a => {
            if(a.descricao === this.record.produto){
                this.record.produto = a;
            }
        })
        this.service.save(this.record)
            .then(() => {
                this.$state.go('app.estoque.list')
            }).catch(console.error);
    }
}

FormController.$inject = [
    'EstoqueService',
    '$stateParams',
    '$state'
];