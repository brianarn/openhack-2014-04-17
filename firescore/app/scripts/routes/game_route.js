Firescore.GameRoute = Ember.Route.extend({
    model: function (params) {
        return this.get('store').find('game', params.game_id);
    }
});
