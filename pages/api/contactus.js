import nodemailer from 'nodemailer'
export default async function handler(req,res){
  console.log(req.body)
      try {	   
        await nodemailer
          .createTransport({
            service: 'gmail',
            auth: {
              user: 'ritvik0012@gmail.com',
              pass: process.env.MAIL_PASSWORD,
            },
          })
          .sendMail({
            from: 'ritvik0012@gmail.com',
            to: 'mahesh.thangaraju@gmail.com',
            subject: req.body.subject,
           text: 'Message from ' + req.body.email + '. \nQuery: ' + req.body.message,
          })
        console.log('Email sent to pree')
        return res.status(200).json({message: "success"});
      } catch (e) {
        console.error(e)
      }
    return res.status(200).json({message: "NOT success"});
}