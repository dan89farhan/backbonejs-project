
var CartItemListView = Backbone.View.extend({
    el: '#cartTable',

    initialize: function () {

        // this.model.get('cartItemList').on('add', this.addCartItem, this);
        // this.model.get('cartItemList').on('remove', this.removeCartItem, this);
        this.render();


    },

    addCartItem: function (cart) {
        console.log("Im in add cartitem.");

        var cartItemView = new CartItemView({ model: cart });
        this.$el.append(cartItemView.render().$el);
    },


    removeCartItem: function (cart) {
        console.log('i m here remove cart');
        this.$('tr#' + cart.cid).remove();
    },

    render: function () {
        $('#table').remove();
        var self = this;
        this.model.get('cartItemList').each(function (cart) {
            var cartItemView = new CartItemView({ model: cart });
            self.$el.append(cartItemView.render().$el);
        })
        // this.$el.html();

        return this;
    }


});