export default class FormController {

    constructor(OrcamentoService, $stateParams, $state, ClienteService, ProdutoService) {
        this.service = OrcamentoService;
        this.$state = $state;
        
        this.produtoFake = {
            produto:"",
            quantidadeProduto:0
        };
        this.produtos = [];        
        this.produtos.push(this.produtoFake);

        if ($stateParams.id) {
            this.service.getOne($stateParams.id)
                .then(registro => {
                    this.record = registro;
                }).catch(console.error);
        }

        ClienteService.getAll()
            .then(clientes => {
                this.clientes = clientes;
            }).catch(erro => {
                console.log(erro);
            });

        ProdutoService.getAll()
            .then(produtos => {
                this.produtosCadastrados = produtos;
            }).catch(erro => {
                console.log(erro);
            });
    }

    save() {
        this.record = {
            clientes : this.clientes,
            produtos : this.produtos
        }
        this.service.save(this.record)
            .then(() => {
                this.$state.go('app.orcamento.list')
            }).catch(console.error);
    }

    addProd() {
        this.produtos.push(this.produtoFake);
    }
}

FormController.$inject = [
    'OrcamentoService',
    '$stateParams',
    '$state',
    'ClienteService',
    'ProdutoService'
];