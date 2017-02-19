(function () {

  'use strict';

  var RefreshingView = Backbone.View.extend({
    initialize: function () {
      this.model.on('change', function () {
        console.log('the view was refreshed');
        this.render();
      }, this);
    },
    render: function () {
      this.$el.html(this.model.get('text'));
    }
  });

  var model = new Backbone.Model({text: new Date().toString()});
  var view = new RefreshingView(({model: model, el: 'body'}));

  setInterval(function () {
    model.set({text: new Date().toString()});
  }, 1000);
}());
