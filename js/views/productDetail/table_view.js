var TableView = Backbone.View.extend({

    el: '#container',
    events: {

    },
    initialize: function () {

        this.model.get('productDetails').on('remove', this.removeRow, this);

        this.model.get('productDetails').on('sync', this.syncTable, this);
        this.render();
    },


    syncTable: function (data) {
        console.log("iin ftech from db", data);

        this.$el.html('');
        var fv = new FilterByBrandView({
            model: base
        });
        this.$el.append(fv.render().$el);
        this.$el.append('<tr>            <th>name</th>            <th>price</th>            <th>brand</th>            <th>categories</th>            <th>date</th>            <th>type</th>            <th>description</th>            <th>action</th>            <th>Add to Cart</th>        </tr>');
        var self = this;
        for (let index = 0; index < data.length; index++) {
            var rowview = new RowView({
                model: data.at(index)
            });
            self.$el.append(rowview.render().$el);
        }
    },

    removeRow: function (row) {
        console.log('i m here in remove');
        this.$('tr#' + row.cid).remove();
    },

    fetchData: function () {
        console.log('im in fetch data');

        this.model.get('productDetails').fetch().done(function (response) {});
    },
    fetchDataFromFilter: function (url) {
        this.model.get('productDetails').fetch({
            url: url
        }).done(function (response) {});
    },
    render: function () {
        this.$el.html('');
        this.$el.append('<tr>            <th>name</th>            <th>price</th>            <th>brand</th>            <th>categories</th>            <th>date</th>            <th>type</th>            <th>description</th>            <th>action</th>            <th>Add to Cart</th>        </tr>');
    }
});