export default class ListController {

    constructor(ProdutoService) {
        this.cols = [{
            label: 'Código',
            value: 'codigo'
        },{
            label: 'Descrição',
            value: 'descricao'
        },{
            label: 'Preço',
            value: 'preco'
        }];

        this.records = [];

        ProdutoService.getAll()
            .then(records => {
                this.records = records;
            }).catch(erro => {
                console.log(erro);
            });

        this.excluir = function(id){
            ProdutoService.remove(id);
        }
    }
}

ListController.$inject = ['ProdutoService']