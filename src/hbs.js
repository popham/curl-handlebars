define(['curl/plugin/fetchText'], function (fetchText) {
    function error (ex) {
        throw ex;
    }

    return {
        load: function (resourceName, req, callback, config) {
            fetchText(req.toUrl(resourceName + '.hbs'), function(text) {
                req(['handlebars'], function(Handlebars) {
                    var result = Handlebars.compile(text);
                    callback(result);
                });
            }, callback.error || error);
        },
        cramPlugin: './hbs-cram'
    };
});
