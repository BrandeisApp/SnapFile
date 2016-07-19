Meteor.methods({
	profileinsert:function (user) {
		if(Profile.find({userId:user}).fetch().length == 0) {
			var friendcode = user.split("")
			friendcode[5]="`"
			friendcode=friendcode.join('')
			friendcode=friendcode.split('`')[0]

			email = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails[0].address
			Profile.insert({userId:user, email:email, verified:false, username:email.split("@")[0], firstname:"", lastname:"", fullname:"",friendcode:friendcode})
		}
	},
	  sendEmail: function (to,text,subject) {

    //check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
	Email.send({
      to: to,
      from:"flashfile@gmail.com",
      subject: subject,
      text:text
    });
    



  },
  	sendText:function(to,text) {
  	twilio = Twilio("AC62b9526fee8c314f7532d28abac5c6ed", "2144cd3e139076773f99bb71f8f74ced");
 	twilio.sendSms({
    to:to, // Any number Twilio can deliver to
    from:("+17323333632"), // A number you bought from Twilio and can use for outbound communication
    body:text // body of the SMS message
  }, function(err, responseData) { //this function is executed when a response is received from Twilio
    if (!err) { // "err" is an error received during the request, if any
      // "responseData" is a JavaScript object containing data received from Twilio.
      // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
      // http://www.twilio.com/docs/api/rest/sending-sms#example-1
      console.log(responseData.from); // outputs "+14506667788"
      console.log(responseData.body); // outputs "word to your mother."
    }
});
  	}
})