import angular from 'angular';

import { default as uiRouter } from '@uirouter/angularjs';
import diretivas from './diretivas';

import { mainConfig } from './main/config';
import { clienteConfig } from './clientes/config';
import { produtoConfig } from './produtos/config';
import { estoqueConfig } from './estoque/config';
import { orcamentoConfig } from './orcamentos/config';
import { loginConfig } from './login/config';

const modulo = angular
    .module('app', [uiRouter, diretivas]);

export default modulo
    .config(mainConfig)
    .config(clienteConfig(modulo))
    .config(produtoConfig(modulo))
    .config(estoqueConfig(modulo))
    .config(orcamentoConfig(modulo))
    .config(loginConfig(modulo))
    .constant('BASE_URL', 'http://localhost:8090/api')
    .config(require('./providersConfig'))
    .service('marble.ContextoService', require('./context.service'))
    .service('marble.NotificationService', require('./notification.service'))
    .name;