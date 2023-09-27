const nodemailer= require("nodemailer");
 require("dotenv").config()
exports.register =async(req,resp)=>{
  
   
   // console.log(req.body)
   try {

      const {email}  = req.body;

      const transporter = nodemailer.createTransport({
         service:"gmail",
         auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
         }
      })

      const mailOptions ={
         from:process.env.EMAIL,
         to:email,
         subject:"Sending email with REact and nodejs",
         html:'<h1>congratulation you successfully send email </h1>'

      }

      transporter.sendMail(mailOptions,(error,info)=>{
         if(error){
            console.log("Error" + error)
         }
         else{
            console.log("Email sent :" + info.response)
            resp.status(201).json({status:201,info})
         }
      })
      
   } catch (error) {
      console.log("Error" + error);
      resp.status(401).json({status:401,error})
   }
}
