// add your collections here
// Chats = new Meteor.Collection('chats');
var fileStore = new FS.Store.GridFS("storedfiles");

StoredFiles = new FS.Collection("storedfiles", {
 stores: [fileStore]
});
Friends = new Meteor.Collection('friends');
Files = new Meteor.Collection('files');



Profile = new Meteor.Collection('profile')
