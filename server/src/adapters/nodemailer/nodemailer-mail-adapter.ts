import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "53b54a78bc48ea",
    pass: "c35d559135ddb8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@Feedback.com>',
      to: 'João Victor <joaovictor2004@gmail.com>',
      subject,
      html: body,
    });
  }
}