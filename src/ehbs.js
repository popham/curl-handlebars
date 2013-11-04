define(['curl/plugin/_fetchText'], function (fetchText) {
    function error (ex) {
        throw ex;
    }

    return {
        load: function (resourceName, req, callback, config) {
            fetchText(req.toUrl(resourceName + '.hbs'), function(text) {
                req(['ember'], function(Ember) {
                    var name = resourceName.split("/").pop();
                    var result = Ember.TEMPLATES[name] = Ember.Handlebars.compile(text);
                    callback(result);
                });
            }, callback.error || error);
        },
        cramPlugin: './ehbs-cram'
    };
});
