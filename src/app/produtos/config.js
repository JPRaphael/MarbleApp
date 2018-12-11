import ListController from './list.controller'
import FormController from './form.controller'
import ProdutoService from './service';

export const produtoConfig = (modulo) => {
  modulo.service('ProdutoService', ProdutoService);
  return ['$stateProvider', config];
};

function config ($stateProvider) {
  $stateProvider
    .state('app.produto', {
      template: require('@views/default.html'),
      url: 'produtos',
      redirectTo: 'app.produto.list'
    })
    .state('app.produto.list', {
      template: require('@views/produtos/list.html'),
      url: '/list',
      controller: ListController,
      controllerAs: 'vm'
    })
    .state('app.produto.new', {
      template: require('@views/produtos/form.html'),
      url: '/new',
      controller: FormController,
      controllerAs: 'vm'
    })
    .state('app.produto.edit', {
      template: require('@views/produtos/form.html'),
      url: '/{id}',
      controller: FormController,
      controllerAs: 'vm'
    });
}