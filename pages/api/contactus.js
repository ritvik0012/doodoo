import nodemailer from 'nodemailer'
export default async function handler(req,res){
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ritvik0012@gmail.com',
          pass: 'tdiq hvzd rfxa wpeb',
        }
      });
      var mailOptions = {
        from: 'ritvik0012@gmail.com',
        to: 'ritvik0012@gmail.com',
        subject: req.body.subject,
        text: 'Message from ' + req.body.email + '. \nQuery: ' + req.body.message,
      }
      transporter.sendMail(mailOptions, function(error,info) {
        if(error){
          console.log(error);
        }
        else{
          console.log('Email sent: ' + info.response);
        }
      })
    return res.status(200).json({message: "success"});
}