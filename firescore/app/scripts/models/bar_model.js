/*global Ember*/
Firescore.Bar = DS.Model.extend({
    name: DS.attr('string'),

    message: DS.attr('string')
});

// probably should be mixed-in...
Firescore.Bar.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Firescore.Bar.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    message: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    message: 'foo'
    
  }
  
];
