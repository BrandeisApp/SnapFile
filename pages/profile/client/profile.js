
Session.set("caneditusername",false);


Template.profile.rendered= function() {
	Meteor.call("profileinsert",Meteor.userId());
}
Template.profile.events({
	'click #editusername':function(){
		
		Session.set("caneditusername",true);
		
	},

	'click #doneusername':function(){
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		toinsert.username= $("#newusername").val()
		Profile.update({_id:toinsert._id},toinsert)
		Session.set("caneditusername",false)
	}


})
Template.profile.helpers({
	email:function(){
		return Profile.find({userId:Meteor.userId()}).fetch()[0].email
	},
	username:function(){
		return Profile.find({userId:Meteor.userId()}).fetch()[0].username
	},
	caneditusername:function(){
		return Session.get("caneditusername");
	}
})
Template.profile.events({

})