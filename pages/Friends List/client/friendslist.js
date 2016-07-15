Template.friendslist.helpers({
	friends: function (){
		var friendlist = Friends.find({userId:Meteor.userId()}).fetch()
		var friends = [];
		console.log(friendlist)
		for(var i = 0; i<friendlist.length;i++) {
			friends[i]=Profile.find({userId:friendlist[i].friendId}).fetch()[0]
			console.log(friends)
		}
		
		return friends;
	}

})