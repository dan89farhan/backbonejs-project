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
        'description': '',
        'brandName': '',
        'category': '',
        'type': '',
        'quantity': 0
    },
    urlRoot: API_URL + "saveProduct",
});

var ProductDetails = Backbone.Collection.extend({
    model: ProductDetail,

    url: API_URL + "getProducts",

    // fetch: function (options) {
    //     return Backbone.Collection.prototype.fetch.call(this, options);
    // },

    initialize: function () {

        // this.fetch();
        // console.log(this);

    }
})



var Base = Backbone.Model.extend({
    relations: {
        'product': Backbone.Model,
        'productDetails': Backbone.Collection,
        'cartItemList': Backbone.Collection
    }
})