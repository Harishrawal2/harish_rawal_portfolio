import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const adminMailOptions = {
        from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `,
    };

    const userMailOptions = {
        from: `"Harish Rawal" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting Me!",
        replyTo: process.env.EMAIL_USER,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #0f172a; padding: 20px; color: white;">
                <h2>Thank You for Reaching Out!</h2>
              </div>
              <div style="padding: 20px;">
                <p>Hi <strong>${name}</strong>,</p>
                <p>Thank you for contacting me and taking the time to review my portfolio.</p>
                <p>I’ll review your message and get back to you as soon as possible:</p>
                <blockquote style="background: #f9f9f9; border-left: 4px solid #ccc; margin: 10px 0; padding: 10px;">
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong> ${message.replace(/\n/g, "<br/>")}</p>
                </blockquote>
                <p>Looking forward to connecting with you.</p>
                <p>Warm regards,</p>
                <p><strong>Harish Rawal</strong><br/>Web Developer</p>
              </div>
            </div>
          </div>
        `,
    };


    try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
