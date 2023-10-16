const fs = require('fs');
fs.writeFile('welcome.txt','Hello Node',function(error,fd){
    if(error){
        console.log(error);
    }else{
        console.log('the file is written sucessfully')
    }
});
fs.readFile('welcome.txt',function(error,fd){
    if(error){
        console.log(error);
    }else{
        console.log('the file is read succesfully')
        console.log(fd.toString());
    }
}) ;