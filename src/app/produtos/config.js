import ListController from './list.controller'
import FormController from './form.controller'
import ProdutosService from './service';

export const produtosConfig = (modulo) => {
  modulo.service('ProdutosService', ProdutosService);
  return ['$stateProvider', config];
};

function config ($stateProvider) {
  $stateProvider
    .state('app.produtos', {
      template: require('@views/default.html'),
      url: 'produtos',
      redirectTo: 'app.produtos.list'
    })
    .state('app.produtos.list', {
      template: require('@views/produtos/list.html'),
      url: '/list',
      controller: ListController,
      controllerAs: 'vm'
    })
    .state('app.produtos.new', {
      template: require('@views/produtos/form.html'),
      url: '/new',
      controller: FormController,
      controllerAs: 'vm'
    })
    .state('app.produtos.edit', {
      template: require('@views/produtos/form.html'),
      url: '/{id}',
      controller: FormController,
      controllerAs: 'vm'
    });
}