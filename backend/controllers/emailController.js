import nodemailer from 'nodemailer'

exports.handleSayHello = (req, res) => {
    // Not the movie transporter!
  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'listtryourlist@gmail.com', // Your email id
          pass: 'passwordforlisttr' // Your password
      }
  });

  let text = 'Hello world from \n\n' + req.body.name;
  let mailOptions = {
    from: 'listtryourlist@gmail.com>', // sender address
    to: 'i150004@e.ntu.edu.sg', // list of receivers
    subject: 'Email Example', // Subject line
    text: '<b>Hello world</b>' //, // plaintext body
  // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
    transporter.close();
  });

}
