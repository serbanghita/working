    $.ajaxSetup({
        beforeSend: function() {
            console.log(arguments);
        }
    });
