Meteor.publish("Friends", function() {return Friends.find();});
Meteor.publish("The Files", function() {return Files.find();});
Meteor.publish("Profile", function() {return Profile.find();});