import nodemailer from "nodemailer";

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "testehaabsyed@gmail.com",
    pass: "nfpkagjwnjviowfh", // App password
  },
});

const sendMail = async (fromEmail, to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"${fromEmail}" <testehaabsyed@gmail.com>`, // show sender's email in name
      replyTo: fromEmail, // replies go directly to user
      to,
      subject,
      text,
      html,
    });

    console.log("📧 Email sent:", info.messageId);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, message: "Email failed to send" };
  }
};

export default sendMail;
