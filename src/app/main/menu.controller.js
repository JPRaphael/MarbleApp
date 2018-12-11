export default class MenuController {
    constructor() {
        this.itens = [
            {
                state:'app.dashboard',
                icon: 'icon-home',
                name: 'Dashboard'
            },{
                state:'app.cliente',
                icon: 'icon-users',
                name: 'Clientes'
            },{
                state:'app.produto',
                icon: 'icon-shopping-cart',
                name: 'Produtos'
            },{
                state:'app.estoque',
                icon: 'icon-file',
                name: 'Estoque'
            },{
                state:'app.orcamento',
                icon: 'icon-file',
                name: 'Orcamento'
            }
        ]
    }
}