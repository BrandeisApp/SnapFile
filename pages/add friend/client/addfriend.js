Template.addfriend.events({
	'click #add':function(){
		var friendusername = $("#friendusername").val()
		Friends.insert({userId:Meteor.userId(), friendId:Profile.find({username:friendusername}).fetch()[0]._id, username:Profile.find({userId:Meteor.userId()}).fetch()[0].username, friendusername:Profile.find({username:friendusername}).fetch()[0].username, friendfullname:Profile.find({username:friendusername}).fetch()[0].fullname })
		Friends.insert({friendIdId:Meteor.userId(), userId:Profile.find({username:friendusername}).fetch()[0]._id, friendusernamename:Profile.find({userId:Meteor.userId()}).fetch()[0].username, username:Profile.find({username:friendusername}).fetch()[0].username, friendfullname:Profile.find({userId:Meteor.userId()}).fetch()[0].fullname })
	}
})