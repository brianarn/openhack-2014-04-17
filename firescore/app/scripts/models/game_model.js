Firescore.Game = DS.Model.extend({
    name: DS.attr('string'),
    createdAt: DS.attr('string', {
        defaultValue: function () { return new Date(); }
    }),
    players: DS.hasMany('player', {
        async: true
    })
});

Firescore.Game.FIXTURES = [
    {
        id: 'deadbeef',
        name: 'First Game',
        players: [0, 1, 2, 3]
    },
    {
        id: 'aaaaaaaa',
        name: 'Crypto Game',
        players: [4, 5, 6]
    }
];
