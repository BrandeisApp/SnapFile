Template.chat.helpers({
  chatlines: function(){
    
    return Chats.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},

});


Template.chat.events({
  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const theText = $(".js-chatinput").val(); 
    const chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    console.dir(chatline);
    Chats.insert(chatline);
  },

});