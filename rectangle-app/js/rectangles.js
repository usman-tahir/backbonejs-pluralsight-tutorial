(function () {
  'use strict';

  var RectangleModel = Backbone.Model.extend({});

  var RectangleView = Backbone.View.extend({
    tagName: 'div',
    className: 'rectangle',

    events: {
      'click': 'move'
    },

    render: function () {
      this.setDimensions();
      this.setPosition();
      this.setColor();
      console.log('A RectangleModel has been rendered.');
      return this;
    },

    setDimensions: function () {
      this.$el.css({
        width: this.model.get('width') + 'px',
        height: this.model.get('height') + 'px'
      });
      console.log('The width, height and color have been set.')
    },

    setPosition: function () {
      var position = this.model.get('position');
      this.$el.css({
        left: position.x,
        right: position.y
      });
      console.log('The position has been set.');
    },

    setColor: function () {
      this.$el.css('background-color', this.model.get('color'));
    },

    move: function () {
      this.$el.css('left', this.$el.position().left + 10);
    }
  });

  /*
  var myRectangle = new RectangleModel({
    width: 50,
    height: 50,
    position: {
      x: 300,
      y: 150
    },
    color: 'red'
  });
  */
  var myRectangleModels = [
    new RectangleModel({
      width: 50,
      height: 50,
      position: {
        x: 300,
        y: 150
      },
      color: 'red'
    }),
    new RectangleModel({
      width: 100,
      height: 40,
      position: {
        x: 500,
        y: 300
      },
      color: 'blue'
    })
  ];

  _(myRectangleModels).each(function (model) {
    $('div#canvas').append(new RectangleView({model: model}).render().el);
  });
}());
