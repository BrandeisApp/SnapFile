Template.addfriend.events({
	'click #add':function(){
		var friendusername = $("#friendusername").val()
		Friends.insert({userId:Meteor.userId(), friendId:Profiles.find({username:friendusername}).fetch()[0], username:Profiles.find})
		Friends.insert({})
	}
})