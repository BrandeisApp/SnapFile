Template.download.events(
    {
    
       "click .js-submit-download": function(event){
           var code =  document.getElementById("code").value;
           var name = StoredFiles.find({_id:code}).fetch()[0].original.name;
           var pt1 = '<a class="downloadurl" href="cfs/files/storedfiles/' + code + '/' + name + '?download"' + '>Download your file here</a>';
           document.getElementById("outputurl").innerHTML = pt1;
       },
    }
);