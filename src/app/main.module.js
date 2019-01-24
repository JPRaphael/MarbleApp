import angular from 'angular';

import { default as uiRouter } from '@uirouter/angularjs';
import diretivas from './diretivas';

import { mainConfig } from './main/config';
import { produtosConfig } from './produtos/config';
import { loginConfig } from './login/config';

const modulo = angular
    .module('app', [uiRouter, diretivas]);

export default modulo
    .config(mainConfig)
    .config(produtosConfig(modulo))
    .config(loginConfig(modulo))
    .constant('BASE_URL', 'http://localhost:8090/api')
    .config(require('./providersConfig'))
    .service('listthings.ContextoService', require('./context.service'))
    .service('listthings.NotificationService', require('./notification.service'))
    .name;