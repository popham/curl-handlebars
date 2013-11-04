define(['curl/cram/_define'], function (_define) {
    var compiler = require("ember-template-compiler");
    var util = require("util");

    return {
        compile: function (pluginId, resId, req, io, config) {
            var absId = pluginId + '!' + resId;
            var name = resId.split("/").pop();
            io.read(resId + ".hbs", function (text) {
                var code = util.format(
                    "Ember.TEMPLATES[%s] = Ember.Handlebars.template(%s);",
                    JSON.stringify(name),
                    compiler.precompile(text)
                );
                io.write(_define(absId, ['ember'], '', '', code));
            }, io.error);
        }
    };
});
