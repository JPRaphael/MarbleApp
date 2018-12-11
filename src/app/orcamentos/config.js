import ListController from './list.controller'
import FormController from './form.controller'
import OrcamentoService from './service';

export const orcamentoConfig = (modulo) => {
  modulo.service('OrcamentoService', OrcamentoService);
  return ['$stateProvider', config];
};

function config ($stateProvider) {
  $stateProvider
    .state('app.orcamento', {
      template: require('@views/default.html'),
      url: 'orcamentos',
      redirectTo: 'app.orcamento.list'
    })
    .state('app.orcamento.list', {
      template: require('@views/orcamentos/list.html'),
      url: '/list',
      controller: ListController,
      controllerAs: 'vm'
    })
    .state('app.orcamento.new', {
      template: require('@views/orcamentos/form.html'),
      url: '/new',
      controller: FormController,
      controllerAs: 'vm'
    })
    .state('app.orcamento.edit', {
      template: require('@views/orcamentos/form.html'),
      url: '/{id}',
      controller: FormController,
      controllerAs: 'vm'
    });
}