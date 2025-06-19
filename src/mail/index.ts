import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";

export type MailOptions = {
  to: string;
  subject: string;
  html: string;
  successMessage: string;
  errorMessage: string;
  attachments?: Attachment[];
};

// Create a transport for sending emails (replace with your email service's data)
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_HOST, // Use your email service
  auth: {
    user: process.env.SENDER_EMAIL, // Your email address
    pass: process.env.SENDER_PASSWORD, // Your password
  },
});

// Send the email
export const sendMail = ({
  to,
  subject,
  html,
  successMessage,
  errorMessage,
  attachments,
}: MailOptions): Promise<boolean> => {
  const mailOptions = {
    from: `Midjournal <${process.env.SENDER_EMAIL}>`,
    to,
    subject,
    html,
    attachments,
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
