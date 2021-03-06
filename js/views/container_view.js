var ContainerView = Backbone.View.extend({
    el: '#container',
    type: 'post',
    events: {
        'click .addProduct': 'onAdd',
        'click .fetchFromDB': 'fetchFromDB'
    },
    onAdd: function () {

        var productData = new ProductDetail();

        console.log("in on add ", productDetails);

        productData.set(productDetail.toJSON())

        this.model.get('productDetails').create(productData);
        // router.navigate('showTable', true);

    },

    fetchFromDB: function () {
        router.navigate('showTable', true);
    },


    initialize: function () {
        this.render();

    },
    render: function () {

        this.$el.html('');
        this.$el.append(basicView.render().$el);
        this.$el.append(brandsView.render().$el);
        this.$el.append(categoriesView.render().$el);
        this.$el.append(typesView.render().$el);
        this.$el.append('<button class ="addProduct">Add</button>');
        this.$el.append('<button class ="fetchFromDB">fetch from database</button>')

        // this.$el.append(tableView.render().$el);
        //var addToCartItems = base.get('productDetails').where({ addToCart: 1 });

        return this;
    }
});


// -- Model initialization
var basic = new Basic();


var brands = new Brands([]);



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

var cartItemList = new CartItemList();

var base = new Base();
base.set({
    'product': product,
    'productDetails': productDetails,
    'cartItemList': cartItemList
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
// cartCountView.render();
// var tableView = new TableView({
//     model: base
// });

// var cartItemListView = new CartItemListView({
//     model: base
// });


console.log('In container view');

var fv = new FilterByBrandView({
    model: base
});

var countView = new CountView({
    model: base
});

// product.get('types')
var containerView = new ContainerView({
    model: base
});
// var containerView = new ContainerView({ model: base });