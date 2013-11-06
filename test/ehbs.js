define(['ehbs!template'], function(template) {
	mocha.setup('bdd');
	var assert = chai.assert;

	describe('ember handlebars plugin', function(){
		describe('load handlebars template', function(){
			it('should be in Ember.TEMPLATES', function(done){
				assert.isFunction(Ember.TEMPLATES.template);
				done();
			});

			it('should be in returned from curl', function(done){
				assert.isFunction(template);
				done();
			});

			it('should render html', function(done){
				var view = Ember.View.create({template: template});
				var buffer = Ember.RenderBuffer();
				view.render(buffer);
				assert.equal(buffer.string(), "<h1>Title</h1>");
				done();
			});
		});
	});
});