var TableView = Backbone.View.extend({

    el: '#table',
    events: {

    },
    initialize: function () {

        this.model.get('productDetails').on('add', this.addRow, this);
        this.model.get('productDetails').on('remove', this.removeRow, this);


    },

    addRow: function (row) {


        var rowView = new RowView({ model: row });
        row.save();
        this.$el.append(rowView.render().$el);
    },


    removeRow: function (row) {
        console.log('i m here remove');
        this.$('tr#' + row.cid).remove();
    },
    // render: function () {
    //     console.log("i m here", this.model.get('productDetails'));
    //     console.log("i m here", this.model.get('productDetails').models);

    //     var self = this;
    //     // this.model.get('productDetails').fetch();
    //     this.model.get('productDetails').each(function (row) {
    //         var rowView = new RowView({ model: row });
    //         self.$el.append(rowView.render().$el);
    //     });

    //     return this;
    // }
});