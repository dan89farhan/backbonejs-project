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
        'showTable': 'showTable',
        'viewCart': 'viewCart'
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


    },
    viewCart: function () {
        console.log("im in view Cart");
        //base.get()
        var cartItemListView = new CartItemListView({ model: base });

    }

    // viewTable: function () {
    //     console.log("inside router");
    //     var view = new TableView({ model: table });
    //     view.getTable();
    // }
});


var router = new AppRouter();
Backbone.history.start();