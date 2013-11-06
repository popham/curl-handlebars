curl-handlebars [![Build Status](https://travis-ci.org/jsedlacek/curl-handlebars.png)](https://travis-ci.org/jsedlacek/curl-handlebars)
=========

Handlebars plugin for [curl.js](https://github.com/cujojs/curl)

Usage
-----

This plugin allows to loading handlebars templates using AMD syntax.

```
define(['hbs!template'], function(template) {
    // Now we have template.hbs loaded, compiled and passed as argument into AMD module.
});
```

Installation and Setup
----------------------
Download curl-ember-handlebars using [bower](http://bower.io/).
```
bower install curl-handlebars --save
```

To allow `hbs!` usage add the following snippet to your curl.config.
```
"packages": {
    "hbs": {
        "location": "bower_components/curl-handlebars/src",
        "main": "hbs.js"
    }
}
```

Also make sure you have correctly set up locations of handlebars.
```
"packages": {
    "handlebars": {
        "location": "bower_components/handlebars",
        "main": "handlebars.js",
        "config": {
            "dontWrapLegacy": true,
            "exports": "Handlebars",
            "loader": "curl/loader/legacy"
        }
    }
}
```
