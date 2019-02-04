var RowView = Backbone.View.extend({

    tagName: 'tr',
    // id: this.model.cid,
    type: 'post',

    events: {
        'click .update': 'updateRow',
        'click .delete': 'deleteRow',
        'click .addToCart': 'addToCartRow'
    },
    updateRow: function () {
        var id = this.model.cid;
        var datas = ['name', 'price', 'brand', 'category', 'date', 'type', 'description'];
        datas.forEach(data => {
            var chcekDisable = $('input#' + data + this.model.cid).prop('disabled');
            $('input#' + data + this.model.cid).prop("disabled", !chcekDisable);
            this.model.set({
                [data]: ($('#' + data + id).val()),

            });

        });

        this.model.save();

    },
    deleteRow: function () {
        base.get('productDetails').remove(this.model);
        this.model.destroy({
            success: function (model, response) {
                console.log("in destroy");
                console.log(model);
                console.log(response);

            }
        });
    },
    addToCartRow: function () {
        // console.log(this.model.get('addToCart'));
        var qty = this.model.get("quantity");
        this.model.set({ quantity: qty + 1 });
        console.log(base.get('cartItemList').add(this.model));

    },



    initialize: function () {
        // this.model.save();
    },
    render: function () {

        this.$el.append('<td><input type="text" id = "name' + this.model.cid + '" value ="' + this.model.get('name') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "price' + this.model.cid + '" value ="' + this.model.get('price') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "brand' + this.model.cid + '" value ="' + this.model.get('brand') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "category' + this.model.cid + '" value ="' + this.model.get('category') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "date' + this.model.cid + '" value ="' + this.model.get('date') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "type' + this.model.cid + '" value ="' + this.model.get('type') + '" disabled/>' + '</td>');
        this.$el.append('<td><input type="text" id = "description' + this.model.cid + '" value ="' + this.model.get('description') + '" disabled/>' + '</td>');
        this.$el.append('<td><button class = update>update</button><button class = delete>Delete</button></td>');
        this.$el.append('<td><button class= addToCart>Add to Cart</button></td>')
        this.$el.attr('id', this.model.cid);
        if (this.model.get('type') == 'New') {
            this.$el.css('background-color', 'orange');
        } else if (this.model.get('type') == 'Refresh') {
            this.$el.css('background-color', 'white');
        } else {
            this.$el.css('background-color', 'green');
        }
        console.log("im in row view render");

        return this;
    }
});