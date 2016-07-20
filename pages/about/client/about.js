Template.about.events({
	'click #send':function(){
		Meteor.call("sendText","+19086706526","Hello")
	}
})
