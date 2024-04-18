import { FiGithub, FiLink, FiLinkedin, FiMail } from 'react-icons/fi';
export const contactData = {
  title: 'Contact',
  description: 'Write me a message and I will get back to you.',
  inputfields: [
    {
      name: 'name',
      placeholder: 'Your Name',
      type: 'text',
      validation: 'Please fill in your name',
      pattern: '{2}',
      label: 'Name',
    },
    {
      name: 'email',
      placeholder: 'Your E-Mail',
      type: 'email',
      validation: 'Please fill in your email',
      pattern: '[@]{4}',
      label: 'Email',
    },
    {
      name: 'subject',
      placeholder: 'Your Subject',
      type: 'text',
      validation: 'Please fill in your subject',
      pattern: '{10}',
      label: 'Subject',
    },
  ],
  textarea: {
    placeholder: 'Your Message',
    name: 'message',
    rows: 8,
    validation: 'Please fill in your message',
    pattern: '{10}',
    label: 'Message',
  },
  button: {
    value: {
      de: 'Absenden',
      en: 'Send',
    },
  },
  icon: FiMail,
  iconcolor: '#FFFFFF',
  colors: {
    main: 'main-btn',
    second: 'secondary-btn',
    icon: 'white',
  },
  privacyOptIn: {
    checkbox: {
      de: 'Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.',
      en: 'I agree that Alpay may use my personal data (name and e-mail address) to contact me.',
    },
    description: {
      de: 'Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben',
      en: 'By submitting this request, you acknowledge that you have read the Private Policy',
    },
  },
} as const;

export const words = [
  {
    text: 'Sanjay Varma.',
    className: 'text-blue-500 dark:text-blue-500',
  },
];
