// var Getview = Backbone.View.extend({
//     events: {
//         "click": "getFetch"
//     },
//     getFetch: function () {
//         router.navigate('data', true);
//     }
// });

// var getview = new Getview({ el: "#getData" });

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
        //console.log('showTable');
        //console.log(containerView);
        base.get('productDetails').fetch();
        // var tableView = new TableView({ model: base.get('productDetails') });

        console.log(' i m in data', tableView);

        // tableView.getTable();


    }

    // viewTable: function () {
    //     console.log("inside router");
    //     var view = new TableView({ model: table });
    //     view.getTable();
    // }
});


var router = new AppRouter();
Backbone.history.start();