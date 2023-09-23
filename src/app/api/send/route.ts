import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import EmailTemplate from '@/app/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request, res: Response) {
  const { body } = req;
  const { email, subject, message}: any = body;
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "AB" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}