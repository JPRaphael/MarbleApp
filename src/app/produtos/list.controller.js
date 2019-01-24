export default class ListController {

    constructor(ProdutosService) {
        
        this.records = [];

        ProdutosService.getAll()
            .then(records => {
                this.records = records;
            }).catch(erro => {
                console.log(erro);
            });

        this.excluir = function(id){
            ProdutosService.remove(id)
        }
    }
}

ListController.$inject = ['ProdutosService']