(function () {

  'use strict';

  var MyModel = new Backbone.Model();
  MyModel.set('content', 'this is some content');

  var MyView = new Backbone.View({
    model: MyModel,
    className: 'model-object'
  });

  $('body').prepend(MyView.el);
  console.log('prepended to body');

  var ParagraphView = new Backbone.View({
    el: 'body'
  });
  console.log(ParagraphView.el);
}());
