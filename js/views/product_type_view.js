var TypeView = Backbone.View.extend({
    tagName: 'span',

    events: {
        "change input[name='type']": "updateRadio"
    },

    updateRadio: function (e) {

        var type = $(e.target).val();
        productDetail.set({
            'type': type
        });
        console.log(productDetail);

    },
    initialize: function () {
        // this.render();
    },
    render: function () {
        this.$el.html('<input type="radio" name="type" id="' + this.model.get('name') + '" value = "' + this.model.get('name') + '">' + this.model.get('name') + '</input>');
        return this;
    }
});

var TypesView = Backbone.View.extend({
    tagName: 'div',
    el: '#types',
    events: {

    },
    initialize: function () {
        // this.render();
    },
    render: function () {
        var self = this;
        this.model.get('product').get('types').each(function (type) {
            var typeView = new TypeView({
                model: type
            });
            self.$el.append(typeView.render().$el);
        });
        return this;
    }
});