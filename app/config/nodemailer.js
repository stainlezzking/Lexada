import nodemailer from "nodemailer";

let configOptions = {
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NO_REPLY_EMAIL,
    pass: process.env.NO_REPLY_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
};

const transporter = nodemailer.createTransport(configOptions);
const sendEmail = async ({ subject, html }) => {
  try {
    const response = await transporter.sendMail({
      from: {
        name: "Lexada Real Estate Properties Web APP",
        address: process.env.NO_REPLY_EMAIL,
      },
      to: process.env.CONTACT_EMAIL,
      subject,
      html,
    });
    return { success: true, message: "Your message has been delivered" };
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export { sendEmail };
