define(['hbs!template'], function(template) {
	mocha.setup('bdd');
	var assert = chai.assert;

	describe('handlebars plugin', function(){
		describe('load handlebars template', function(){
			it('should be in returned from curl', function(done){
				assert.isFunction(template);
				done();
			});

			it('should render html', function(done){
				assert.equal(template(), "<h1>Title</h1>");
				done();
			});
		});
	});
});
