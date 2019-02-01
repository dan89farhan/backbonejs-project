
var Server = Backbone.Model.extend();

var ServerList = Backbone.Collection.extend(
    {
        model: Server,
        url: "http://localhost:8080/getBrands",
        initialize: function () { console.log('In collection init'); }
    }
);

list = new ServerList;
list.fetch({
    success: function (collection, response) {
        console.log(response, collection);
    },

    error: function () { alert("error"); }
});
console.log(list);
