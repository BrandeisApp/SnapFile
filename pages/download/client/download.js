Template.download.events(
    {
    
       "click .js-submit-download": function(event){
           var code =  document.getElementById("code");
           var pt1 = '<a download="" href="cfs/files/storedfiles/'  + code.value + '"' + '>Download your file here</a>';
           document.getElementById("outputurl").innerHTML = pt1;
           

       },
    }
                    
)