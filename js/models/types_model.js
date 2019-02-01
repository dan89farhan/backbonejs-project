var Type = Backbone.Model.extend({
    default: {
        name: ''
    }
});

var Types = Backbone.Collection.extend({
    model: Type
});