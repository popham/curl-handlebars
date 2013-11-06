curl({
    "packages": {
        "curl": {
            "location": "../bower_components/curl/src/curl",
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
        "hbs": {
            "location": "../src",
            "main": "hbs.js"
        },
        "test" : {
            "location": "."
        }
    }
}, ["test/hbs"], function() {
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
