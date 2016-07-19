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
            Session.set("File",fileObj._id)
          }
        });
     });
   },
   'click #sendfile':function(){

    var friends = Friends.find({userId:Meteor.userId()}).fetch()
    var idlist =[]
    var idcounter = 0;
    if ((Session.get("File")) != undefined) {
    if (friends.length != 0) {
    for (var i = 0; i<friends.length; i++) {
        if (friends[i].phoneverified) {
            if (friends[i].emailverified) {
          if ($("#"+friends[i].friendId)[0].checked) {
              if ($("#emailauth")[0].checked) {
              
              AuthCode.insert({userId:friends[i].friendId,fileId:Session.get("File"),type:"email"})
              var emailcode = AuthCode.find({userId:friends[i].friendId,fileId:Session.get("File"),type:"email"}).fetch()._id.split('')
              emailcode[5] = '`'
              emailcode=emailcode.join('').split("`")[0]
              Meteor.call("sendEmail",Profile.find(friends[i].friendId).fetch()[0].email,"You have a file availible to download to download at href://localhost:3000/download . Your authorization code is "+emailcode+" .","Download Authorization Code")
              }
              if($("#phoneauth")[0].checked) {
              AuthCode.insert({userId:friends[i].friendId,fileId:Session.get("File"),type:"phone"})
              var phonecode = AuthCode.find({userId:friends[i].friendId,fileId:Session.get("File"),type:"phone"}).fetch()._id.split('')
              phonecode[5] = '`'
              phonecode=phonecode.join('').split("`")[0]
              Meteor.call("sendText",Profile.find(friends[i].friendId).fetch()[0].email,"You have a file availible to download to download at href://"+"Your authorization code is "+phonecode)
              }
        }
        }
        } 
        }
        }
        }
    
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