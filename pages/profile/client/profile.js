
Session.set("caneditusername",false);
Session.set("caneditfirstname",false);
Session.set("caneditlastname",false);
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
	},
	'click #editfirstname':function(){
		
		Session.set("caneditfirstname",true);
		
	},

	'click #donefirstname':function(){
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		toinsert.firstname= $("#newfirstname").val()
		Profile.update({_id:toinsert._id},toinsert)
		Session.set("caneditfirstname",false)
	},
	'click #editlastname':function(){
		
		Session.set("caneditlastname",true);
		
	},

	'click #donelastname':function(){
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		toinsert.lastname= $("#newlastname").val()
		Profile.update({_id:toinsert._id},toinsert)
		Session.set("caneditlastname",false)
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
	},
	caneditfirstname:function(){
		return Session.get("caneditfirstname");
	},
	caneditlastname:function(){
		return Session.get("caneditlastname");
	},
	firstname:function(){
		return Profile.find({userId:Meteor.userId()}).fetch()[0].firstname
	},
	lastname:function(){
		return Profile.find({userId:Meteor.userId()}).fetch()[0].lastname
	}

})
Template.profile.events({

})