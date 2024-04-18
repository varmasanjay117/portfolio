import React from 'react';

type EmailTemplateProps = {
  firstName: string;
  email: string;
  subject: string;
  message: string;
};

export default function EmailTemplate({
  firstName,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>Hii, Sanjay</h2>
      <p>
        I amd {firstName} , {email},{message}
      </p>
    </div>
  );
}
