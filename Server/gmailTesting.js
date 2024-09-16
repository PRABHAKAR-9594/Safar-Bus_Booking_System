
import nodemailer from 'nodemailer'
export const gmail_api=(to,subject,text)=>{
const gmailauth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "safarofficial4049@gmail.com",
            pass: "szrv xnzt ulwj qske"

        }
    });

    const receiver = {
        from : "officalsafar@gmail.com",
        to : to,
        subject :subject,
        text : text
    };

    gmailauth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
}
