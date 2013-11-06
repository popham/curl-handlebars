define(['curl/cram/_define'], function (_define) {
    var handlebars = require("handlebars");
    var util = require("util");

    return {
        compile: function (pluginId, resId, req, io, config) {
            var absId = pluginId + '!' + resId;
            io.read(resId + ".hbs", function (text) {
                var code = util.format(
                    "Handlebars.template(%s);",
                    handlebars.precompile(text)
                );
                io.write(_define(absId, ['handlebars'], '', '', code));
            }, io.error);
        }
    };
});
