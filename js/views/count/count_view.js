var CountView = Backbone.View.extend({
    el: '#count',
    initialize: function () {
        base.get('cartItemList').on('change', this.reRender, this);
    },
    reRender: function (data) {
        console.log('i m here');

        console.log(data);

    }
});