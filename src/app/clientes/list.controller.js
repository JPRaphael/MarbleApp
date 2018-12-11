export default class ListController {

    constructor(ClienteService) {
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

        ClienteService.getAll()
            .then(records => {
                this.records = records;
            }).catch(erro => {
                console.log(erro);
            });

        this.excluir = function(id){
            ClienteService.remove(id)
        }
    }
}

ListController.$inject = ['ClienteService']