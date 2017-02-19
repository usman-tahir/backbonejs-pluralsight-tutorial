(function () {

  'use strict';

  var FormView = Backbone.View.extend({
    events: {
      'click .clickable': 'handleClick',
      'change': 'handleChange'
    },
    render: function () {
      this.$el.html(
        '<input type="text" class="clickable" placeholder="clickable"> \
        <br><input type="text">'
      );
      return this;
    },
    handleClick: function () {
      console.log('handleClick() called');
    },
    handleChange: function () {
      console.log('handleChange() called');
    }
  });

  var formView = new FormView();
  $('body').append(formView.render().el);
}());
