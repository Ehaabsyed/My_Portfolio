import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (fromEmail, to, subject, text, html) => {
  try {
    const data = await resend.emails.send({
      from: `ScriptSphere <onboarding@resend.dev>`, // default sender (or verify your own domain)
      to,
      subject,
      text,
      html,
      reply_to: fromEmail, // so replies go to the user
    });

    console.log("📧 Email sent:", data.id);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, message: "Email failed to send" };
  }
};

export default sendMail;
