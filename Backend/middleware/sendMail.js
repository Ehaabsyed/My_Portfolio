import nodemailer from "nodemailer";

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "testehaabsyed@gmail.com", // your email
    pass: "nfpkagjwnjviowfh",       // app password
  },
});

const sendMail = async (fromEmail, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"${fromEmail}" <${fromEmail}>`, // show user's email
      replyTo: fromEmail,                    // replies go to user
      to: "testehaabsyed@gmail.com",         // your inbox
      subject,
      text,
      html,
    });

    console.log("📧 Message received from user:", info.messageId);
    return { success: true, message: "Message sent to your inbox" };
  } catch (error) {
    console.error("❌ Failed to receive message:", error);
    return { success: false, message: "Message failed to send" };
  }
};

export default sendMail;
