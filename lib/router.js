Router.configure({
	// this is the name of your layout template
	layoutTemplate: 'layout',
});

// here is how you specify the home page template
Router.route('/', {name: 'home'});

// add more templates here if you want them to be reachable
Router.route('about');
Router.route('profile');
Router.route('/login', {name:'login'});
Router.route('upload')
/*
// here is how to create a link to just one document
// in your collection
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
 */


Router.route('/fileinput',{
 waitOn: function () {
 return Meteor.subscribe('storedfiles')
 },
 action: function () {
 if (this.ready())
 this.render('fileinput');
 else
 this.render('Loading');
 }
});

