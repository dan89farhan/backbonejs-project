var RowView = Backbone.View.extend({

    tagName: 'tr',
    // id: this.model.cid,
    type: 'post',

    events: {
        'click .update': 'updateRow',
        'click .delete': 'deleteRow'
    },
    updateRow: function () {
        var chcekDisable = $('input#' + this.model.cid).prop('disabled');
        $('input#' + this.model.cid).prop("disabled", !chcekDisable);

    },
    deleteRow: function () {
        base.get('productDetails').remove(this.model);
        this.model.destroy();
    },



    initialize: function () {
        // this.model.save();
    },
    render: function () {

        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('name') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('price') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('brand') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('categories') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('date') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('type') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('desc') + '" disabled/>' + '</td>');
        this.$el.append('<td><button class = update>update</button><button class = delete>Delete</button></td>');
        this.$el.attr('id', this.model.cid);
        if (this.model.get('type') == 'New') {
            this.$el.css('background-color', 'orange');
        } else if (this.model.get('type') == 'Refresh') {
            this.$el.css('background-color', 'white');
        } else {
            this.$el.css('background-color', 'green');
        }

        return this;
    }
});