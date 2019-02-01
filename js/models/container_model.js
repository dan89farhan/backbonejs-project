//Form 
var Product = Backbone.Model.extend({
    relations: {

        'brands': Backbone.Collection,
        'categories': Backbone.Collection,
        'types': Backbone.Collection

    }
});

var ProductDetail = Backbone.Model.extend({
    defaults: {
        'name': '',
        'price': '',
        'date': '',
        'desc': '',
        'brand': '',
        'categories': '',
        'type': '',
    },
    urlRoot: "http://localhost:8080/saveProduct",
});

var ProductDetails = Backbone.Collection.extend({
    model: ProductDetail,

    url: "http://localhost:8080/getProducts",

    fetch: function (options) {
        return Backbone.Collection.prototype.fetch.call(this, options);
    },

    initialize: function () {

        this.fetch();
        console.log(this);

    }
})



var Base = Backbone.Model.extend({
    relations: {
        'product': Backbone.Model,
        'productDetails': Backbone.Collection
    }
})