(function () {
  'use strict';

  var A = Backbone.Model.extend({
    initialize: function () {
      console.log('initialize model A');
    },
    toString: function () {
      return JSON.stringify(this.toJSON());
    }
  });

  var B = A.extend({
    initialize: function () {
      console.log('initialize model B');
    }
  });

  var a = new A({
    one: '1',
    two: '2'
  });

  var b = new B({
    three: '3',
    four: '4'
  });

  console.log(a.toString());
  console.log(b.toString());

  console.log(b instanceof A);
  console.log(b instanceof Backbone.Model);
  console.log(a instanceof B);
}());
