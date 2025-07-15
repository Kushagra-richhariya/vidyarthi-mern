const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        // Check if required environment variables are set
        if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
            console.error("Missing email configuration:", {
                MAIL_HOST: process.env.MAIL_HOST ? "Set" : "Missing",
                MAIL_USER: process.env.MAIL_USER ? "Set" : "Missing", 
                MAIL_PASS: process.env.MAIL_PASS ? "Set" : "Missing"
            });
            throw new Error("Email configuration is incomplete. Please check your environment variables.");
        }

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Verify connection configuration
        await transporter.verify();
        console.log("Email server connection verified successfully");

        let info = await transporter.sendMail({
            from: 'Vidyarthi || Dev - Kushagra',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        
        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("Email sending failed:", error.message);
        throw error; // Re-throw the error so the calling function can handle it
    }
}

module.exports = mailSender;