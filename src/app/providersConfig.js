module.exports = config;

config.$inject = ['$httpProvider'];

function config($httpProvider) {
    $httpProvider.interceptors.push(AuthInterceptor);
}

AuthInterceptor.$inject = ['listthings.ContextoService', '$state', '$q', '$injector'];

function AuthInterceptor(ContextoService, $state, $q, $injector) {
    return {
        request: (req) => {
            req.headers.Authorization = ContextoService.getToken();
            return req;
        },
        response: (resp) => {
            console.log(resp.headers('Authorization'));
            return resp;
        },
        responseError: (response) => {
            if (response.status === 401) {
                let notification = $injector.get('listthings.NotificationService');
                notification.info('A sua sessão expirou, por favor faça novamente o login', 'Sessão expirada');
                $state.go('login');
            }
            if (response.status === 422){
                let notification = $injector.get('listthings.NotificationService');
                notification.warning(response.data.message);
            }
            return $q.reject(response);
        }
    }
}
