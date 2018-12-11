export default class ListController {

    constructor(OrcamentoService) {
        this.cols = [{
            label: 'Documento',
            value: 'documento'
        },{
            label: 'Nome',
            value: 'nome'
        },{
            label: 'Telefone',
            value: 'telefone'
        },{
            label: 'E-mail',
            value: 'email'
        }];

        this.records = [];

        OrcamentoService.getAll()
            .then(records => {
                this.records = records;
            }).catch(erro => {
                console.log(erro);
            });

        this.excluir = function(id){
            OrcamentoService.remove(id)
        }
    }
}

ListController.$inject = ['OrcamentoService']