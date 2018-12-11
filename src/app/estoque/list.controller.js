import _ from 'lodash';

export default class ListController {

    constructor(EstoqueService, ProdutoService) {
        var vm = this;
        vm.records = [];

        EstoqueService.getAll()
            .then(records => {
                vm.records = records;
                vm.records.forEach(setTotal);
            }).catch(erro => {
                console.log(erro);
            });


        vm.excluir = function (id) {
            EstoqueService.remove(id);
        }

        vm.save = function (item) {
            console.log(vm.records)
            delete item.total;
            ProdutoService.save(item).then(atualizaLista)
        }
        
        function atualizaLista(item) {
            var index = _.findIndex(vm.records, 'id', item.id);
            vm.records.splice(index, 1, item);
            _.forEach(vm.records, setTotal);
        }

        function setTotal(item) {
            item.total = item.quantidade - item.quantidadePendente;
        }

    }
}

ListController.$inject = ['EstoqueService', 'ProdutoService']