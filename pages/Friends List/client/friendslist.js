Template.friendslist.helpers({
	friends: function (){
		return Friends.find ({userId:Meteor.userId()}).fetch()
	}

})