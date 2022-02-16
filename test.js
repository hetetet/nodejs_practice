const nodemailer=require('nodemailer');
const email={
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "17159625de6021",
      pass: "b2ae83381002be"
    }
  };
const send=async(option)=>{
    nodemailer.createTransport(email).sendMail(option,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }            
    });
};

let email_data={
    from: 'lyj022348@gmail.com',
    to: 'lyj022348@gmail.com',
    subject: 'test mail',
    text:'this is test mail.'
}

send(email_data);