var User = Backbone.Model.extend({
    defaults: {
        userName: '',
        password: ''
    }
});

var Users = Backbone.Collection.extend({
    model: User
});