var CategoryView = Backbone.View.extend({
    tagName: 'span',

    events: {
        'click :checkbox': 'clicked',
    },

    clicked: function (e) {
        var $target = $(e.target);
        var selected = $target.is(':checked');
        var value = $target.val();
        if (selected) {
            categoryRows.add(new Category({ 'name': value }))
        }
        else {
            var category = categoryRows.findWhere({ 'name': value });
            categoryRows.remove(category);
        };

        var result = categoryRows.toJSON().map(function (val) {
            return val.name;
        }).join(',');


        productDetail.set({
            'categories': result
        })


    },
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html('<input type="checkbox" name="' + this.model.get('name') + '" id="' + this.model.get('name') + '" value="' + this.model.get('name') + '">' + this.model.get('name') + '</input>');
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