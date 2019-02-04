var TableView = Backbone.View.extend({

    el: '#table',
    events: {

    },
    initialize: function () {

        //this.model.render();

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

    render: function () {
        this.$el.append('<div>');
        this.$el.append('<table style="width:100%" id="table">');
        this.$el.append('<tr>');
        this.$el.append(' <th>name</th><th>price</th><th>brand</th><th>categories</th><th>date</th><th>type</th><th>description</th><th>action</th>');
        this.$el.append('</tr>');
        this.$el.append('</table>');
        this.$el.append('</div>');
    }
});