Template.verifyphone.rendered = function(){
	

}
Template.verifyphone.helpers({
	useless:function(){
	var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
	toinsert.phoneverified = true;
	Profile.update({_id:toinsert._id},toinsert)
	}
})