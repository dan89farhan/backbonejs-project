var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        'formdata': 'formData',
        'showTable': 'showTable',
        'viewCart': 'viewCart',
        'showTableWithFilter': 'showTableWithFilter'
    },

    index: function () {
        var loginView = new LoginView();
    },
    formData: function () {
        var containerView = new ContainerView({
            model: base
        });
    },
    showTable: function () {
        var tableView = new TableView({
            model: base
        });
        tableView.fetchData();
    },
    showTableWithFilter: function () {
        var tableView1 = new TableView({
            model: base
        });
        console.log('/getP?brand_name=' + $("#brands_name").val() + '&lower=' + $("#lower").val() + '&upper=' + $("#upper").val());

        tableView1.fetchData(API_URL + '/getP?brand_name=' + $("#brands_name").val() + '&lower=' + $("#lower").val() + '&upper=' + $("#upper").val());
    },
    viewCart: function () {
        console.log("im in view Cart");
        //base.get()
        var cartItemListView = new CartItemListView({
            model: base
        });

    }
});


var router = new AppRouter();
Backbone.history.start();