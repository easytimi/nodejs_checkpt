const generator = require('generate-password');
const passcode = ()=>{
  let  password = generator.generate({
       length:10,
       numbers:true,
       alphabeth:true,
       symbols:true,

   })
   console.log('the password is:'+ password);
}
passcode()
