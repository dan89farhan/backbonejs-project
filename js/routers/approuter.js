var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        'showTable': 'showTable',
        'viewCart': 'viewCart'
    },

    index: function () {
        var loginView = new LoginView();
    },
    showTable: function () {
        tableView.fetchData();
    },
    viewCart: function () {
        console.log("im in view Cart");
        //base.get()
        var cartItemListView = new CartItemListView({ model: base });

    }
});


var router = new AppRouter();
Backbone.history.start();