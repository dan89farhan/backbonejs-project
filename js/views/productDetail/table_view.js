var TableView = Backbone.View.extend({

    el: '#table',
    events: {

    },
    initialize: function () {

        // this.model.get('productDetails').on('add', this.addRow, this);
        this.model.get('productDetails').on('remove', this.removeRow, this);

        this.model.get('productDetails').on('sync', this.syncTable, this);

    },


    syncTable: function (data) {
        var self = this;
        for (let index = 0; index < data.length; index++) {
            var rowview = new RowView({ model: data.at(index) });
            self.$el.append(rowview.render().$el);
        }
    },

    removeRow: function (row) {
        console.log('i m here remove');
        this.$('tr#' + row.cid).remove();
    },

    fetchData: function () {
        console.log('im in fetch data');

        this.model.get('productDetails').fetch().done(function (response) {
        });
    },
});