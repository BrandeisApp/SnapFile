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
   
    for (var j=0; j<friends.length;j++) {
      friends[j] = Profile.find({userId:friends[j].friendId}).fetch()[0]
    }
    var idlist =[]
    var idcounter = 0;
    if ((Session.get("File")) != undefined) {;
    if (friends.length != 0) {;
    for (var i = 0; i<friends.length; i++) {console.log(friends[i])
        if (friends[i].phoneverified) {
            if (friends[i].emailverified) {
          if ($("#"+friends[i].userId)[0].checked) {
              if ($("#emailauth")[0].checked) {
              AuthCode.insert({userId:friends[i].userId,fileId:Session.get("File"),type:"email"})
              console.log()
              var emailcode = (AuthCode.find({userId:friends[i].userId,fileId:Session.get("File"),type:"email"}).fetch()[0]._id).split('')
              emailcode[5] = '`'
              emailcode=emailcode.join('').split("`")[0]
              var emailsend = JSON.stringify(Profile.find({userId:friends[i].userId}).fetch()[0].email)
              Meteor.call("sendEmail",emailsend,JSON.stringify("http://turing.cs-i.brandeis.edu:6100/download/"+Session.get("File")+" . Your authorization code is "+emailcode+" .","Download Authorization Code"))
              //Meteor.call('sendEmail',"jjplayer1127@gmail.com","Shamelesstext","basic title")
              }
              if($("#phoneauth")[0].checked) {
              AuthCode.insert({userId:friends[i].userId,fileId:Session.get("File"),type:"phone"})
              var phonecode = (AuthCode.find({userId:friends[i].userId,fileId:Session.get("File"),type:"phone"}).fetch()[0]._id).split('')
              phonecode[5] = '`'
              phonecode=phonecode.join('').split("`")[0]
              
              
              var send = JSON.stringify("http://turing.cs-i.brandeis.edu:6100/download/"+Session.get("File")+" Your authorization code is "+phonecode)
              console.log(send)
              Meteor.call("sendText",Profile.find({userId:friends[i].userId}).fetch()[0].phonenumber,send)
              }
              alert("Sent")
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
  },
  iscurrentuser:function(){
    return (Meteor.userId()!=undefined)
  }

})

if (Meteor.isServer) {
    Meteor.publish("storedfiles", function(){ return StoredFiles.find(); });
};