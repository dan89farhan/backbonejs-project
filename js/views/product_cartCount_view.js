
var CartCountView = Backbone.View.extend({
    el: '#cartCountContainer',

    initialize: function () {
        this.model.get('cartItemList').on("add", this.render, this);
        this.model.get('cartItemList').on("remove", this.render, this);
    },

    render: function () {
        this.$el.html(this.model.get('cartItemList').length);
        return this;

    }
});
