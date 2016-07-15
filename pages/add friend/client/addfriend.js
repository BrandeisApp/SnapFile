Template.addfriend.events({
	'click #add':function(){
		var friendusername = $("#friendusername").val()
		Friends.insert({userId:Meteor.userId(), friendId:Profile.find({username:friendusername}).fetch()[0].userId})
		Friends.insert({friendId:Meteor.userId(), userId:Profile.find({username:friendusername}).fetch()[0].userId})
	}
})