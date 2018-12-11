import ListController from './list.controller'
import FormController from './form.controller'
import EstoqueService from './service';
import ProdutoService from '../produtos/service';

export const estoqueConfig = (modulo) => {
  modulo.service('EstoqueService', EstoqueService);
  modulo.service('ProdutoService', ProdutoService);
  return ['$stateProvider', config];
};

function config ($stateProvider) {
  $stateProvider
    .state('app.estoque', {
      template: require('@views/default.html'),
      url: 'estoque',
      redirectTo: 'app.estoque.list'
    })
    .state('app.estoque.list', {
      template: require('@views/estoque/list.html'),
      url: '/list',
      controller: ListController,
      controllerAs: 'vm'
    })
    .state('app.estoque.new', {
      template: require('@views/estoque/form.html'),
      url: '/new',
      controller: FormController,
      controllerAs: 'vm'
    })
    .state('app.estoque.edit', {
      template: require('@views/estoque/form.html'),
      url: '/{id}',
      controller: FormController,
      controllerAs: 'vm'
    });
}