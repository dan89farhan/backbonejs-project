
var CartCountView = Backbone.View.extend({

    render: function () {
        var cartProduct = this.model.get('productDetails').filter(function (s) {
            return s.get("quantity") > 0;
        });
        console.log(cartProduct);

        var cartCount = cartProduct.length;
        this.$el.append(cartCount);
        return this;
    }
});
