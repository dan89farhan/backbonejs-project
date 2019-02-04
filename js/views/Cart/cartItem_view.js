var CartItemView = Backbone.View.extend({
    tagName: "tr",

    initialize: function () {
        this.model.on("change:quantity", this.render, this);
    },

    events: {
        'click .increaseQuantity': 'increaseQuantity',
        'click .decreaseQuantity': 'decreaseQuantity'
    },

    increaseQuantity: function () {
        var qty = this.model.get('quantity');
        this.model.set({ quantity: qty + 1 });
        console.log(this.model.get('quantity'));

    },

    decreaseQuantity: function () {
        var qty = this.model.get('quantity');
        this.model.set({ quantity: qty - 1 });
        console.log(this.model.get('quantity'));
    },

    render: function () {
        this.$el.html('');
        if (this.model.get("quantity") > 0) {
            console.log("Im in cartitemLIst view render");
            this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('name') + '" disabled/>' + '</td>');
            this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('price') + '" disabled/>' + '</td>');
            this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('quantity') + '" disabled/>' + '</td>');
            this.$el.append('<td><input type="text" id = "' + this.model.cid + '" value ="' + this.model.get('quantity') * this.model.get('price') + '" disabled/>' + '</td>');
            this.$el.append('<td><button class="increaseQuantity">Increase Quantity</button></td>');
            this.$el.append('<td><button class="decreaseQuantity">Decrease Qunatity</button></td>');
            return this;
        }
    }
});