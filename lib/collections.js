// add your collections here
// Chats = new Meteor.Collection('chats');
var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
 stores: [imageStore]
});
