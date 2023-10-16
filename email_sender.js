const prompt = require('prompt-sync')();
let usermail = prompt("please enter your valid email: ")
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'adenigbaezekiel@gmail.com',
        pass:'hsto kxdw tmyc faqb'
    }
});
const mailOptions={
    from:'adenigbaezekiel@gmail.com',
    to:`${usermail}`,
    subject:'nodemailer test',
    text:'good evening sir.kindly pardon me for submitting late.Thanks'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('email sent:'+info.response);
    }
});