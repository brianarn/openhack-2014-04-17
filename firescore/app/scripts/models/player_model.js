Firescore.Player = DS.Model.extend({
    name: DS.attr('string'),
    game: DS.belongsTo('game')
});

Firescore.Player.FIXTURES = [
    { id: 0, name: 'Geoff', game: 'deadbeef' },
    { id: 1, name: 'Zerek', game: 'deadbeef' },
    { id: 2, name: 'James', game: 'deadbeef' },
    { id: 3, name: 'Brian', game: 'deadbeef' },
    { id: 4, name: 'Alice', game: 'aaaaaaaa' },
    { id: 5, name: 'Bob', game: 'aaaaaaaa' },
    { id: 6, name: 'Eve', game: 'aaaaaaaa'}
]
