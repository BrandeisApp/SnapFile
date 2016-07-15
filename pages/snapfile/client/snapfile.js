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
            prompt("Success! Your code is: " + (fileObj._id) + ", copy it below!", (fileObj._id));
          }
        });
     });
   }
});

if (Meteor.isServer) {
    Meteor.publish("storedfiles", function(){ return StoredFiles.find(); });
};