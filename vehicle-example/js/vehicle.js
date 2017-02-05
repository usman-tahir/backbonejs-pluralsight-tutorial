(function () {
  'use strict';

  var Vehicle = Backbone.Model.extend({
    defaults: {
      year: '2017',
      make: 'none',
      model: 'none',
    },

    initialize: function () {
      console.log('A Vehicle model was initialized.');
    }
  }, {
    summary: function () {
      return 'Vehicles are for traveling.';
    }
  });

  var vehicleOne = new Vehicle(),
    vehicleTwo = new Vehicle({
      make: 'Honda',
      model: 'Accord'
    });
  console.log(vehicleOne);
  console.log(vehicleTwo);
  console.log(Vehicle.summary());
}());
