StoredFiles.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

StoredFiles.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});
Template.upload.events({
   'change .myFileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        StoredFiles.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var fileURL = {
              "fileinput.storedfile": "/cfs/files/storedfiles/" + fileObj._id + fileObj.original.name
            };
            Meteor.users.update(userId, {$set: fileURL});
          }
        });
     });
   },
   'click #sendfile':function(){
    
   }
});

Template.upload.helpers({
  yourFriends: function(){
    return Friends.find({userId:Meteor.userId()}).fetch()
  },
  friendname:function(){
    return Profile.find({userId:this.friendId}).fetch()[0].fullname
  }

})

if (Meteor.isServer) {
    Meteor.publish("storedfiles", function(){ return StoredFiles.find(); });
};