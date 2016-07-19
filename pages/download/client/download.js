
Template.download.events(
    {
    
       "click .js-submit-download": function(event){
           var code =  document.getElementById("code").value;
           var name = StoredFiles.findOne({_id:code}).original.name;
           var pt1 = '<a id="URLforDownloading" class="fileDownload" href="cfs/files/storedfiles/' + code + '/' + name + '?download"' + '>Download your file here</a>';
           document.getElementById("outputurl").innerHTML = pt1;
           var fileDownloadURL = '/cfs/files/storedfiles/' + code + '/' + name + '?download';
           console.log(fileDownloadURL);
       },
       "click #URLforDownloading": function(event){
           var code =  document.getElementById("code").value;
           var file = StoredFiles.findOne({_id:code});
           console.log(file._id);
           window.setTimeout(function(){StoredFiles.remove(file._id);}, 1000);
           console.log('clicked');
       },
    }
    
);           

