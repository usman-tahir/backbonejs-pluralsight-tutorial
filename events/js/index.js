(function () {
  'use strict';

  var FordModel = Backbone.Model.extend({
    defaults: {
      make: 'Ford',
      model: 'Fiesta',
      year: '2017'
    }
  });

  var newFord = new FordModel();

  newFord.on('change', function () {
    console.log('This FordModel object has been modified.');
  });

  newFord.on('change:year', function () {
    console.log('The year for this FordModel has been changed.');
  });

  newFord.set('year', '2016');
}());
