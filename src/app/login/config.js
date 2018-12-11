import LoginService from './service';
import LoginController from './login.controller';
import FormController from './form.controller';

export const loginConfig = (modulo) => {
  modulo.service('LoginService', LoginService);
  return ['$stateProvider', config];
};

function config ($stateProvider) {
  $stateProvider
  .state('login', {
    template: require('@views/login/list.html'),
    controller: LoginController,
    controllerAs: 'vm',
    url: '/login'
  })
  .state('registro', {
    template: require('@views/login/form.html'),
    controller: FormController,
    controllerAs: 'vm',
    url: '/registro'
  })
}