//console.log("HELLO WORLD");
//console.log(process.argv);

   
    /*
     //"Baby Steps"
    var arg_sum;
    
    for(var i = 2; i < process.argv.length; i++){
        if(arg_sum == undefined)
        {
            arg_sum = Number(process.argv[i]);
        }else{
            arg_sum = arg_sum + Number(process.argv[i]);
        }//end else
    }
    console.log(arg_sum);
    
    */

    /*
    //"My First I/O"
    
    var fs = require('fs');
    var fs_data = fs.readFileSync(process.argv[2]);
    var fs_fileString = fs_data.toString();
    var fs_ary = fs_fileString.split("\n");
    var fs_count = fs_ary.length - 1;
    console.log(fs_count);
    */
    
    /*
    //"My First asyncronous I/O"
    //sub: using callbacks
    var fs = require('fs');
    
    function doIt()
    {
        fs.readFile(process.argv[2],'utf8',function(err,fs_data){
        
        if(err){throw(err)}
        
        //var fs_fileString = fs_data.toString();
        //var fs_ary = fs_fileString.split("\n");
        
        var fs_ary = fs_data.split("\n");//alternative uses 'utf8' functionality
        
        //**both ways work
        
        var fs_count = fs_ary.length - 1;
        console.log(fs_count)
        })
    }
    
    
    doIt()
    
    */
    
    