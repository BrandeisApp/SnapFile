Template.addfriend.events({
	'click #add':function(){
		var friendcode= $("#friendId").val()
		var friendid = Profile.find({friendcode:friendcode}).fetch()
		if(friendid.length ==1) {
		friendid=friendid[0].userId
		console.log(friendid)
		if (Friends.find({userId:Meteor.userId(), friendId:friendid}).fetch().length==0){
			
		Friends.insert({userId:Meteor.userId(), friendId:friendid})
		Friends.insert({friendId:Meteor.userId(), userId:friendid})
		Router.go("/friendslist")
	}
	else {
		alert('You are already friends with this user.')
	}
	}
	else {
		
		alert('invalid code');
	}
	}
})