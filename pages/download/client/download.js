
Template.download.events(
    {
    
       "click .js-submit-download": function(event){
       	   var emailcode = $("#emailcode").val()
       	   var phonecode = $("#phonecode").val()
       	   var email = false;
       	   var phone = false;

       	   if (AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"email"}).fetch().length ==1) {
       	   var expectedemailcode = AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"email"}).fetch()[0]._id
       	   expectedemailcode = expectedemailcode.split('')
       	   expectedemailcode[5] = '`'
       	   expectedemailcode = expectedemailcode.join('').split('`')[0]
       	  email = true;
       		}
       		if (AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"phone"}).fetch().length ==1) {
       	   var expectedphonecode = AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"phone"}).fetch()[0]._id
       	   expectedphonecode = expectedphonecode.split('')
       	   expectedphonecode[5] = '`'
       	   expectedphonecode = expectedphonecode.join('').split('`')[0]
       	   phone = true
       	   var emailcorrect = false;
       	   var phonecorrect = false;
       		}
       		if (email) {
       			if (emailcode == expectedemailcode) {
       				emailcorrect = true;
       			}
       			else{
       				alert('invalid email code')
       			}
       		}
       		if (phone) {
       			if (phonecode ==expectedphonecode) {
       				phonecorrect = true;
       			}
       			else {
       				alert('invalid phone code')
       			}

       		}

         	
           var name = StoredFiles.findOne({_id:this._id}).original.name;
           var file = StoredFiles.findOne({_id:this._id});

           var pt1 = '<a id="URLforDownloading" class="fileDownload" href="cfs/files/storedfiles/' + this._id + '/' + name + '?download"' + '>Download your file here</a>';
           //document.getElementById("outputurl").innerHTML = pt1;
           var fileDownloadURL = '/cfs/files/storedfiles/' + this._id + '/' + name + '?download';
           Router.go(fileDownloadURL)
            window.setTimeout(function(){StoredFiles.remove(file._id);}, 1000);
           console.log(fileDownloadURL);
       },
       "click #URLforDownloading": function(event){
          
           console.log(file._id);
          
           console.log('clicked');
       },
    }
    
);     
Template.download.helpers({
	emailverification:function(){
		return AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"email"}).fetch().length ==1
	},
	phoneverification:function(){
		return AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"phone"}).fetch().length ==1
	},
	anyverification:function(){
		return AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"email"}).fetch().length ==1||AuthCode.find({userId:Meteor.userId(),fileId:this._id,type:"phone"}).fetch().length ==1
	}
})      

