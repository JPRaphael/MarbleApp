import MainController from './controller';
import MenuController from './menu.controller';

import '../../assets/bootstrap-solid.svg';

export const mainConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      template: require('@views/template.html'),
      redirectTo: 'login',
      controller: MenuController,
      controllerAs: 'vm',
      url: '/'
    })
    .state('app.dashboard', {
      template: require('@views/main/component.html'),
      controller: MainController,
      controllerAs: 'vm',
      url: 'dashboard'
    })
};

mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];