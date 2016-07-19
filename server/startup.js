Meteor.startup(function(){
	// put code here that you need to initialize your app
	// the first time you run it, e.g. creating fake data for testing
process.env.MAIL_URL = "smtp://postmaster@sandboxe4316bf200d24757a2ad9843a598eff8.mailgun.org:c0c76f62675cb40a077266bd850fc318@smtp.mailgun.org:587";
});
