var Brand = Backbone.Model.extend({
    default: {
        id: 0,
        name: ''
    }
});

var Brands = Backbone.Collection.extend({
    model: Brand,
    url: API_URL + "getBrands",

});