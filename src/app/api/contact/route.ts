// import { EmailTemplate } from '../../../components/EmailTemplate';
import Email from '@/components/EmailPreview';
import type { NextRequest } from 'next/server';
import React from 'react';
import { Resend } from 'resend';

interface ContactPayload {
  email: string;
  name: string;
  company: string;
  phone: string;
  message: string;
  role: string;
}

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
};

export const POST = async (req: NextRequest) => {
  try {
    const resend = getResendClient();
    if (!resend) {
      return Response.json(
        { error: 'Missing RESEND_API_KEY' },
        { status: 500 }
      );
    }

    const { email, name, company, phone, message, role } =
      (await req.json()) as ContactPayload;
    const res = await resend.emails.send({
      from: 'S <onboarding@resend.dev>',
      to: 'abpriyanshu007@gmail.com',
      subject: `Contact for ${role} from ${name}`,
      react: React.createElement(Email, {
        email,
        name,
        company,
        phone,
        message,
        role,
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
};
