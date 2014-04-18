Firescore.BarRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('bar', params.bar_id);
  }
});

