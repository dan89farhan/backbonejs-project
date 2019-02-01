var BrandsView = Backbone.View.extend({
    tagName: 'div',
    el: '#brand',
    events: {
        'change select': 'change'
    },

    change: function (e) {

        var brand = $(e.target).val();

        productDetail.set({
            'brand': brand
        });
        console.log('im in brands view change event', productDetail);

        // console.log(this.model);
    },
    initialize: function () {
        // this.render();
        var self = this;
        this.model.get('product').get('brands').fetch().done(function () {
            self.render();
        });

        // this.model.get('product').get('brands').fetch.done(function () {
        //     self.render();
        // });
    },
    render: function () {
        var Template = _.template($("#brands_temp").html());

        var tempHtml = Template({
            brandOptions: this.model.get('product').get('brands').models
        });
        this.$el.html(tempHtml);

        return this;
    }
});