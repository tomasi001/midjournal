import nodemailer, { SendMailOptions } from "nodemailer";

export type MailOptions = SendMailOptions & {
  to: string;
  subject: string;
  html: string;
  successMessage: string;
  errorMessage: string;
};

// Create a transport for sending emails (replace with your email service's data)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.SENDER_EMAIL, // Your email address
    pass: process.env.SENDER_PASSWORD, // Your password
  },
  logger: true,
  debug: true,
});

// Send the email
export const sendMail = ({
  to,
  subject,
  html,
  text,
  list,
  successMessage,
  errorMessage,
  attachments,
}: MailOptions): Promise<boolean> => {
  const mailOptions = {
    from: `Midjournal <${process.env.SENDER_EMAIL}>`,
    to,
    subject,
    html,
    text,
    attachments,
    list,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`${errorMessage}: `, error);
        reject(false);
      } else {
        console.log(`${successMessage}: ${info.response}`);
        resolve(true);
      }
    });
  });
};
