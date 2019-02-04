var TableView = Backbone.View.extend({

    el: '#container',
    events: {
        'click .viewCart': 'viewCart'

    },
    initialize: function () {

        this.model.get('productDetails').on('remove', this.removeRow, this);

        this.model.get('productDetails').on('sync', this.syncTable, this);
        this.render();
    },


    viewCart: function () {
        console.log("In view.");
        router.navigate('viewCart', true);

    },


    syncTable: function (data) {
        console.log("iin ftech from db", data);

        this.$el.html('');
        var fv = new FilterByBrandView({
            model: base
        });
        this.$el.append(fv.render().$el);
        this.$el.append('<label> Count in Cart: </label>');
        this.$el.append("<span id='cartCountContainer'></span>");
        var cartCountView = new CartCountView({
            model: base
        });


        this.$el.append('<div><button class="viewCart" id="viewCart">View Cart</button></div>');


        this.$el.append('<tr>            <th>name</th>            <th>price</th>            <th>brand</th>            <th>categories</th>            <th>date</th>            <th>type</th>            <th>description</th>            <th>action</th>            <th>Add to Cart</th>        </tr>');
        var self = this;
        for (let index = 0; index < data.length; index++) {
            var rowview = new RowView({
                model: data.at(index)
            });
            self.$el.append(rowview.render().$el);
        }
        return this;
    },

    removeRow: function (row) {
        console.log('i m here in remove');
        this.$('tr#' + row.cid).remove();
    },

    fetchData: function () {
        // console.log('im in fetch data');

        this.model.get('productDetails').fetch().done(function (response) {});
    },
    fetchDataFromFilter: function (url) {
        this.model.get('productDetails').fetch({
            url: url
        }).done(function (response) {});
    },

    // render: function () {
    //     this.$el.html('');

    //     this.$el.append('<label> Count: </label>');
    //     //this.$el.append('<span id="cartCountContainer" > </span>');
    //     //this.$el.append(cartCountView.render().$el.html());
    //     var list = cartItemList.filter(function (s) {
    //         return s.get('quantity') > 0;
    //     });
    //     this.$el.append(list.length);
    //     //this.$el.append('<span id=count>0</span>')

    //     this.$el.append('<button class="viewCart" id="viewCart">View Cart</button>');

    //     this.$el.append('<tr>            <th>name</th>            <th>price</th>            <th>brand</th>            <th>categories</th>            <th>date</th>            <th>type</th>            <th>description</th>            <th>action</th>            <th>Add to Cart</th>        </tr>');
    // }
});