Router.configure({
	// this is the name of your layout template
	layoutTemplate: 'layout',
});

// here is how you specify the home page template
Router.route('/', {name: 'home'});

// add more templates here if you want them to be reachable
Router.route('about');
Router.route('s3Tester')

Router.route('/profile',{
 waitOn: function () {
 return Meteor.subscribe('images')
 },
 action: function () {
 if (this.ready())
 this.render('Profile');
 else
 this.render('Loading');
 }
});