//Session auto updates the html, sets all to false so you cannot edit the prifile
Session.set("caneditusername",false);
Session.set("caneditfirstname",false);
Session.set("caneditlastname",false);
Template.profile.rendered= function() {
	//creates a profile if the user does not have one
	Meteor.call("profileinsert",Meteor.userId());
}
Template.profile.events({
	//allows the user to edit username
	'click #editusername':function(){
		
		Session.set("caneditusername",true);
		
	},
	//makes the user to unable edit username and saves it to the server
	'click #doneusername':function(){
		//pulls current profile
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		//changes the username to whatever you changed it to
		toinsert.username= $("#newusername").val()
		//puts the new profile onto the server
		Profile.update({_id:toinsert._id},toinsert)
		//makes the user unable to edit
		Session.set("caneditusername",false)
	},
	//allows the user to edit the first name
	'click #editfirstname':function(){
		Session.set("caneditfirstname",true);
		
	},
	//makes the user to unable edit first name and saves it to the server
	'click #donefirstname':function(){
		//pulls current profile
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		//changes the first name to whatever you changed it to
		toinsert.firstname= $("#newfirstname").val()
		//changes the full name to whatever you changed it to
		toinsert.fullname = (toinsert.firstname +" "+ toinsert.lastname);
		//puts the new profile onto the server
		Profile.update({_id:toinsert._id},toinsert)
		//makes the user unable to edit
		Session.set("caneditfirstname",false)

		
	},
	//allows the user to edit the first name
	'click #editlastname':function(){
		
		Session.set("caneditlastname",true);
		
	},
	//makes the user to unable edit last name and saves it to the server
	'click #donelastname':function(){
		//pulls current profile
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		//changes the last name to whatever you changed it to
		toinsert.lastname= $("#newlastname").val()
		//changes the full name to whatever you changed it to
		toinsert.fullname = (toinsert.firstname +" "+ toinsert.lastname);
		//puts the new profile onto the server
		Profile.update({_id:toinsert._id},toinsert)
		//makes the user unable to edit
		Session.set("caneditlastname",false)
	}


})
Template.profile.helpers({
	email:function(){
		//sends user email to the html
		return Profile.find({userId:Meteor.userId()}).fetch()[0].email
	},
	username:function(){
		//sends user username to the html
		return Profile.find({userId:Meteor.userId()}).fetch()[0].username
	},
	caneditusername:function(){
		//tells the html if you can edit the username
		return Session.get("caneditusername");
	},
	caneditfirstname:function(){
		//tells the html if you can edit the firstname
		return Session.get("caneditfirstname");
	},
	caneditlastname:function(){
		//tells the html if you can edit the lastname
		return Session.get("caneditlastname");
	},
	firstname:function(){
		//sends user firstname to the html
		return Profile.find({userId:Meteor.userId()}).fetch()[0].firstname
	},
	lastname:function(){
		//sends user lastname to the html
		return Profile.find({userId:Meteor.userId()}).fetch()[0].lastname
	},
	//creates the friend code
	userId:function(){
		//gets the userId
		var userId = Meteor.userId()
		//splits the userId by each letter
		userId = userId.split("")
		//sets the 6th letter to `
		userId[5]='`'
		//rejoins ir into a string
		userId= userId.join("")
		//splits it at ` to gain the first 5 terms
		return userId.split("`")[0];
	}

})
