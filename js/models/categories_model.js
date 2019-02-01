var Category = Backbone.Model.extend({
    default: {
        name: ''
    }
});

var Categories = Backbone.Collection.extend({
    model: Category,
    url: "http://localhost:8080/getCategory",
});