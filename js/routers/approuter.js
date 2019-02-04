var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        'formdata': 'formData',
        'showTable': 'showTable',
        'viewCart': 'viewCart'
    },

    index: function () {
        var loginView = new LoginView();
    },
    formData: function () {
        var containerView = new ContainerView({ model: base });
    },
    showTable: function () {
        var tableView = new TableView({
            model: base
        });
        tableView.fetchData();
    },
    viewCart: function () {
        // console.log("im in view Cart");
        //base.get()
        var cartItemListView = new CartItemListView({ model: base });

    }
});


var router = new AppRouter();
Backbone.history.start();