var express = require('express');
var path = require('path');
var app = express();

var poetry = [
    {title: 'Black Magic', date: 'September 2012', body: 'The air is thick with spices.<br>My nose stings, water salts<br>my cheeks. Heat scalds my<br>hands and the burlap dolls<br>stare darkly at me from the<br>shelf. I stick a pin in each<br>of their eyes and call it<br>Thursday evening. Tomorrow<br>we are going out for drinks.'},
    {title: 'Pigeons', date: 'September 2012', body: 'Black water under the river bridge<br>in Minneapolis, city of the drowned.<br>Winter curls its nails under my skin;<br>I wish I could dump the bodies from<br>this iron graveyard into that dark river.'},
    {title: 'Back in the Day', date: 'March 2013', body: 'i used to make voodoo heads of my ex-lovers.<br>i took photographs of them, polaroids usually<br>and summoned the flesh out of the pictures.<br>i shrank their mental image, the fleshy tumor<br>on the picture that vaguely resembled a person,<br>and dried it up. i strung them all into a necklace<br>with hay-twine and sweetgrass and placed<br>pearls into their empty eye-sockets. there,<br>hanging on the shelf, they did not bother me.<br>their heads were powerless<br>just as i.'}
    ];

var prose = [
    {title: 'Imarith', date: 'September 2012', body: 'his eyes shine from over the black whorls of his cheeks and the thin orchid-petals over his eyebrows. his poet’s leaves are painted purple; they glow softly with the pollen from his nightmares. i have never seen him so close to death, so close to his dreams.<br><br>he never shares his dreams with me. when i ask he just smiles, his lips pressed thin and the grove humming between his fingertips and mine. a firefly circles the lantern we are using to silence the darkness. he holds my icy hands without a word. on the darkest nights, when rain falls in slick sheets over the tree canopy and collects in the pool at the bottom of the grove, he asks me to sleep with him. it is as innocent a request as it could possibly be--which is to say, not at all. i think sometimes the nightmares are his way of flirting, his own unique foreplay, but he assures me they are all pain. that the suffering he tastes in the back of his throat isn’t just my honey or my sap.<br><br>his head rests against the crook of my neck, his lips slightly open in his sleep. he has never been more beautiful than when he is dreaming, when his shoulders rise and fall. his hands press into my back, the soft petals of his fingertips against hard, icy wood. he is like a panther, sleek and limber, a soft coat of fur dusted with starlight from the luminescent grove. he lays against the snowy deeps of my chest.<br><br>i want to cry every time he wakes up screaming.'}
    ];

app.set('port', (process.env.PORT || 5000));

app.get('/poetry', function(req, res){
    res.send(poetry);
});

app.get('/prose', function(req, res){
    res.send(prose);
});

app.get('/*', function(req, res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, 'public', file));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});