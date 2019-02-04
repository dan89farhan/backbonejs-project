var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        'formdata': 'formData',
        'showTable': 'showTable',
        'viewCart': 'viewCart',
        'showTableWithFilter/:brand_name/:lower/:upper': 'showTableWithFilter'
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
    showTableWithFilter: function (brand_name, lower, upper) {
        var tableView1 = new TableView({
            model: base
        });

        console.log(brand_name);
        console.log(lower);
        console.log(upper);


        tableView1.fetchDataFromFilter(API_URL + '/getFilter?brand_name=' + brand_name + '&lower=' + lower + '&upper=' + upper);
    },
    viewCart: function () {
        // console.log("im in view Cart");
        //base.get()
        var cartItemListView = new CartItemListView({
            model: base
        });

    }
});


var router = new AppRouter();
Backbone.history.start();