// import { EmailTemplate } from '../../../components/EmailTemplate';
import Email from '@/components/EmailPreview';
import { NextRequest } from 'next/server';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) =>{
  try {
    const { email, name, company, phone, message, role } = await req.json();
    const res = await resend.emails.send({
    from: 'S <onboarding@resend.dev>',
    to: 'abpriyanshu007@gmail.com',
    subject: `Contact for ${role} from ${name}`,
    react: React.createElement(Email, {
      email: email as string,
      name: name as string,
      company: company as string,
      phone: phone as string,
      message: message as string,
      role: role as string,
      }),
    });

    console.log(
      `Email sent to ${email} with name ${name} and company ${company} with phone ${phone} and message ${message} and role ${role}`
    );

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }

    console.log(res);

    return Response.json(res);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
