var ContainerView = Backbone.View.extend({
    el: '#container',
    type: 'post',
    events: {
        'click .addProduct': 'onAdd'
    },
    onAdd: function () {

        var productData = new ProductDetail();

        productData.set(productDetail.toJSON())

        this.model.get('productDetails').add(productData);
        // var row_view = new RowView();
        // row_view.saveModel();
        // this.model.get('')

    },
    initialize: function () {
        this.render();


    },
    render: function () {

        this.$el.append(basicView.render().$el);
        this.$el.append(brandsView.render().$el);
        this.$el.append(categoriesView.render().$el);
        this.$el.append(typesView.render().$el);
        this.$el.append('<button class ="addProduct">Add</button>');
        this.$el.append(tableView.render().$el);
        return this;
    }
});


// -- Model initialization
var basic = new Basic();


var brands = new Brands([
]);



var categories = new Categories();


var types = new Types([
    new Type({
        name: 'New'
    }),
    new Type({
        name: 'Refresh'
    }),
    new Type({
        name: 'Old'
    })
]);

var product = new Product();

var categoryRows = new Categories();



product.set({

    'brands': brands,
    'catogories': categories,
    'types': types,

});


var productDetail = new ProductDetail();

// This is Collection

var productDetails = new ProductDetails();
console.log(productDetails);



var base = new Base();
base.set({
    'product': product,
    'productDetails': productDetails
})


// console.log(base.get('productDetails').get('productDetails'))
// -- View initialization

var basicView = new BasicView({
    model: base
});

var brandsView = new BrandsView({
    model: base
});

var categoriesView = new CategoriesView({
    model: base
});

var typesView = new TypesView({
    model: base
});

// -- Product Details View initialization

// var rowView = new RowView({
//     model: base
// });

var tableView = new TableView({
    model: base
});


// product.get('types')
var containerView = new ContainerView({ model: base });