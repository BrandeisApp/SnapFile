Template.verifyemail.helpers({
	useless:function(){
	var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
	console.log(Meteor.userId())
	toinsert.emailverified = true;
	Profile.update({_id:toinsert._id},toinsert)
	Verify.remove(this._id)
	}
})