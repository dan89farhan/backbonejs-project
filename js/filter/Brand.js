//fetching all the brands in drop down

//


var Row = Backbone.Model.extend();

var Table = Backbone.Collection.extend({
    model: Row,
});
var table = new Table();
//console.log(table);

var RowView = Backbone.View.extend({


    tagName: "tr",

    initialize: function () {

    },
    render: function () {
        //  console.log(this.model);
        // this.$el.attr('id', (this.model.cid));
        this.$el.append("<td>" + this.model.get("product_name") + "</td>");
        this.$el.append("<td>" + this.model.get("price") + "</td>");
        this.$el.append("<td>" + this.model.get("brand_name") + "</td>");
        this.$el.append("<td id='cat' title=" + this.model.get('category_name') + ">" + this.model.get("category_name") + "</td>");
        this.$el.append("<td>" + this.model.get("date") + "</td>");
        this.$el.append("<td>" + this.model.get("product_Type") + "</td>");
        // this.$el.append("<td>" + this.model.get("description") + "</td>");
        this.$el.append("<td>" + this.model.get("description") + "</td>");
        this.$el.append("<td><button class='delete'>Delete</button></td>");
        this.$el.append("<td><button class='edit'>Edit</button></td>");
        // this.$el.append("</tr>");

        if (this.model.get("product_type") == "new") {
            this.$el.css("background-color", "#E67E22 ");
        }
        if (this.model.get("product_type") == "refurbished") {
            this.$el.css("background-color", "#3498DB");
        }
        if (this.model.get("product_type") == "old") {
            this.$el.css("background-color", "#2ECC71");
        }
        return this;

    }


});



var TableView = Backbone.View.extend({



    initialize: function () {

        this.model.on('add', this.callOnce, this);
    },

    callOnce: function (row) {

        console.log(' i m in callOnce');
        var _thisView = this;
        var rowView = new RowView({
            model: row
        });
        console.log(this.$el);
        this.$el.append(rowView.render().$el);
        //this.render();

    },
    render: function () {


        /*   var self = this;
          this.model.each(function (row) {
              var rowView = new RowView({
                  model: row
              });
              console.log(self.$el);
              self.$el.append(rowView.render().$el);

          }); */
        return this;
    }

});
var tableView = new TableView({
    el: "#tableContainer",
    model: table
})


var FilterByBrandView = Backbone.View.extend({

    events: {
        "click #filter": "onFilter",
    },
    onFilter: function (row) {

        /* 
                $("#tableContainer").html("");
                console.log($("#brands_name").val());

                console.log(table);

                table.fetch({
                    url: 'http://localhost:8080/filterByBrandName?brand_name=' + $("#brands_name").val() + '&lower=' + $("#lower").val() + '&upper=' + $("#upper").val()
                }).done(function () {
                    console.log(' i m in callback');

                }); */


        var brand_name = $("#brands_name").val();
        var lower = $("#lower").val();
        var upper = $("#upper").val();
        console.log(lower);
        console.log(upper);


        router.navigate('showTableWithFilter/' + brand_name + '/' + lower + '/' + upper, true);
        console.log('in filter function', );


        // var newRow = new RowView({
        //     model: row
        // });
        // this.$el.append(newRow.render().$el);
    },

    render: function () {
        this.$el.append("Brand : <input type='text' id='brands_name'>");
        this.$el.append("Price :");
        this.$el.append("lower : <input type='text' id='lower'>");
        this.$el.append("Upper : <input type='text' id='upper'>");
        this.$el.append("<br><button id='filter'>Filter</button>");
        // this.$el.append(tableView.render());
        return this;
    }
});

var fv = new FilterByBrandView({
    //el: "#BrandNameFilterContainer"
});
fv.render();