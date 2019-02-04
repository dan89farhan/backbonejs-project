var LoginView = Backbone.View.extend({
    el: '#container',
    events: {
        'click #login_btn': 'loginClick'
    },

    login: function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = '../api/login';
        console.log('Loggin in... ');
        var formValues = {
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };

        $.ajax({
            url: url,
            type: 'POST',
            dataType: "json",
            data: formValues,
            success: function (data) {
                console.log(["Login request details: ", data]);

                if (data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();

                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            }
        });
    },
    loginClick: function () {
        console.log(' login clicked');

        var url = API_URL + 'authenticate';
        console.log('Loggin in... ');
        var formValues = {
            userName: $('#username').val(),
            password: $('#password').val()
        };
        console.log(JSON.stringify(formValues));


        $.ajax({
            url: url,
            type: 'POST',
            dataType: "json",

            data: formValues,
            success: function (data) {
                // console.log("Login request details: ", data);

                if (data.error) {  // If there is an error, show the error messages
                    alert('Error occured' + data.response);
                    console.log(' Error occured ', data.error);

                }
                else { // If not, send them back to the home page
                    console.log(' success ', data.value, typeof data.value);
                    if (data.value == 'true') {
                        router.navigate('formdata', true);
                    }
                    else {
                        alert('You are unauthenticate!\n Please enter correct username and password');
                    }


                    // window.location.replace('#');
                }
            },
            error: function (data) {
                alert('Error occured' + data.response);
                console.log(data);

            }
        });

    },
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html();
        var Template = _.template($("#login_temp").html());

        var tempHtml = Template();
        this.$el.html(tempHtml);

        return this;

    }
});