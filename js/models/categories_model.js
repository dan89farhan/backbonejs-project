var Category = Backbone.Model.extend({
    default: {
        name: ''
    }
});

var Categories = Backbone.Collection.extend({
    model: Category,
    url: API_URL + "getCategory",
});