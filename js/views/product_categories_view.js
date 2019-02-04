var CategoryView = Backbone.View.extend({
    tagName: 'span',

    events: {
        'click :checkbox': 'clicked',
    },

    clicked: function (e) {
        var $target = $(e.target);
        var selected = $target.is(':checked');
        var value = $target.val();
        console.log(selected, value);

        if (selected) {
            categoryRows.add(new Category({ 'categoryName': value }))
        }
        else {
            var category = categoryRows.findWhere({ 'categoryName': value });
            categoryRows.remove(category);
        };

        console.log(categoryRows);


        var result = categoryRows.toJSON().map(function (val) {
            return val.categoryName;
        }).join(',');
        console.log(result);


        productDetail.set({
            'category': result
        });

        console.log('productDetails ', productDetail);



    },
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html('<input type="checkbox" name="' + this.model.get('categoryName') + '" id="' + this.model.get('categoryName') + '" value="' + this.model.get('categoryName') + '">' + this.model.get('categoryName') + '</input>');
        return this;
    }
});

var CategoriesView = Backbone.View.extend({
    tagName: 'div',
    el: '#catogeries',

    initialize: function () {

        var self = this;
        this.model.get('product').get('catogories').fetch().done(function () {
            self.render();
        });
    },
    render: function () {
        var self = this;
        this.model.get('product').get('catogories').each(function (category) {
            var categoryView = new CategoryView({
                model: category
            });
            self.$el.append(categoryView.render().$el);
        });
        return this;
    }
});