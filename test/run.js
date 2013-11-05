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
        "chai": {
            "location": "../bower_components/chai",
            "main": "chai.js"
        },
        "mocha": {
            "location": "../bower_components/mocha",
            "main": "mocha.js",
            "config": {
                "exports": "mocha",
                "loader": "curl/loader/legacy",
                "requires": ["css!mocha/mocha"]
            }
        },
        "ehbs": {
            "location": "../src",
            "main": "ehbs.js"
        },
        "hbs": {
            "location": "../src",
            "main": "hbs.js"
        }
    },
    "paths": {
        "jquery": "../bower_components/jquery/jquery.js"
    },
    "main": 'tests'
}, ["mocha"], function(mocha) {
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
