$.ajaxSetup({
    beforeSend: function() {
        console.log(arguments);
    }
});

const orderEvent = $.Event(
    "eventName",
    {
        originalEvent: {
            detail: {
                a: {
                    b: { c: "someId" }
                }
            }
        }
    }
);
