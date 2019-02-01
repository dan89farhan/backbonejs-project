var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        'showTable': 'showTable'
    },

    index: function () {
        console.log('index');
    },
    showTable: function () {

        tableView.fetchData();
    }
});


var router = new AppRouter();
Backbone.history.start();