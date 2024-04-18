import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest, NextResponse } from 'next/server';
import EmailTemplate from '@/components/partials/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: formData.subject,
      react: EmailTemplate({
        firstName: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }) as React.ReactElement,
      //   html: `<p>hii<strong>{formData.name}</strong> <strong>first email</strong>!</p>`,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
