curl({
    "packages": {
        "curl": {
            "location": "../bower_components/curl/src/curl",
        },
        "ember": {
            "location": "../bower_components/ember",
            "main": "ember.min.js",
            "config": {
                "exports": "Ember",
                "loader": "curl/loader/legacy",
                "requires": ["jquery", "handlebars"]
            }
        },
        "handlebars": {
            "location": "../bower_components/handlebars",
            "main": "handlebars.js",
            "config": {
                "dontWrapLegacy": true,
                "exports": "Handlebars",
                "loader": "curl/loader/legacy"
            }
        },
        "ehbs": {
            "location": "../src",
            "main": "ehbs.js"
        },
        "hbs": {
            "location": "../src",
            "main": "hbs.js"
        },
        "test" : {
            "location": "."
        }
    },
    "paths": {
        "jquery": "../bower_components/jquery/jquery.js"
    },
}, ["test/hbs", "test/ehbs"], function() {
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
