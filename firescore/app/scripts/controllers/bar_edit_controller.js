Firescore.BarEditController = Ember.ObjectController.extend({
  needs: 'bar',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.bar.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('bar',this.get('model'));
    }
  }
});

