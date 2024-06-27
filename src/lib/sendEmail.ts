"use server"
// import { EmailTemplate } from '../../../components/EmailTemplate';
// import Email from '@/components/(footer)/EmailPreview';
import React from 'react';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ( formData : FormData) =>{
  try {
    const formData = FormData.arguments[0];
    // const { id } = await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['abpriyanshu007@gmail.com'],
    //   subject: 'Hello world',
    //   react: ""
    // });

    // // if (error) {
    // //   return Response.json({ error }, { status: 500 });
    // // }

    // return Response.json(id);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
