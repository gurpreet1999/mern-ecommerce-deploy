const nodeMailer=require("nodemailer");


const sendMail=async(options)=>{

    const transporter=nodeMailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure: true,
        service:"gmail",
        auth:{
            user:process.env.MAILER_USER,
            pass:process.env.MAILER_PASSWORD
        }
    })
    const mailOptions={
        from:process.env.MAILER_USER,
        to: options.email,
        subject: options.subject,
        text: options.message
        
        }
        await transporter.sendMail(mailOptions)

}


module.exports=sendMail
