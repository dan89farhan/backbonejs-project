var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        'showTable': 'showTable'
    },

    index: function () {
        var loginView = new LoginView();
    },
    showTable: function () {

        tableView.fetchData();
    }
});


var router = new AppRouter();
Backbone.history.start();