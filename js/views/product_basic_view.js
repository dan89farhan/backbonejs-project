var BasicView = Backbone.View.extend({
    events: {
        'change input#name': 'addName',
        'change input#price': 'addPrice',
        'change input#date': 'addDate',
        'change input#desc': 'addDesc',
    },

    addName: function (e) {

        productDetail.set({
            'name': $(e.target).val()
        });
        console.log(productDetail);
    },
    addPrice: function (e) {

        productDetail.set({
            'price': $(e.target).val()
        });
        console.log(productDetail);
    },
    addDate: function (e) {

        productDetail.set({
            'date': $(e.target).val()
        });

        console.log(productDetail);

    },
    addDesc: function (e) {

        productDetail.set({
            'desc': $(e.target).val()
        });

        console.log(productDetail);

    },
    initialize: function () {
        // this.render();
    },
    render: function () {
        // console.log(this.model);
        this.$el.html();
        var Template = _.template($("#prod_name_price_data").html());
        var tempHtml = Template();
        this.$el.html(tempHtml);

        return this;
    }
});