'use client';
import React, { useState, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { contactData } from '@/lib/form-data';
import { useToast } from '@/components/ui/use-toast';
export default function Page() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const [cursorBlink, setCursorBlink] = useState<boolean>(true);
  const [cursor, setCursor] = useState<string>('');

  const { toast } = useToast();

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string,
  ) => {
    const words = text.split(' ');
    let lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + ' ';
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join('\n');
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else if (name === 'message') {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const codeSnippet = `
  import  { useState } from "react";
  
  // 🌈 Spreading Stardust: 
  // Crafting Cosmic Email 🌌
  
  const [sender, setSender] = "${name}${
    lastUpdatedField === 'name' ? (cursorBlink ? '|' : ' ') : ''
  }🚀";
  const [recipient, setRecipient] = "${email}${
    lastUpdatedField === 'email' ? (cursorBlink ? '|' : ' ') : ''
  }📧";
  const [subject, setSubject] = \n"${subject}${
    lastUpdatedField === 'subject' ? (cursorBlink ? '|' : ' ') : ''
  }✨";
  const [message, setMessage] = 
  \`Hello, intrepid traveler! 👋\n
  Across the cosmos, a message for you:\n
  "${wordWrap(message, 40, ' ')}${
    lastUpdatedField === 'message' ? (cursorBlink ? '|' : ' ') : ''
  }"\n
  Wishing you stardust dreams,\n
  ${name}${lastUpdatedField === 'name' ? (cursorBlink ? '|' : ' ') : ''}
  \``;

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(data.entries());

    try {
      const response = await axios.post('/api/send', formObject);
      console.log('response', response);
      if (response.status === 200 || response.status === 201) {
        toast({
          title: 'You Message has been sent:',
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(formObject, null, 2)}
              </code>
            </pre>
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="md:col-span-6 lg:col-span-6  border-lines md:block hidden overflow-y-auto">
        <Highlight code={codeSnippet} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} text-xl w-full bg-transparent`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      <div className="md:col-span-6 lg:col-span-6 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto w-4/5 my-auto md:mx-auto p-4">
        <form onSubmit={notifySentForm} autoComplete="off">
          <div className="flex gap-4 flex-col">
            {contactData.inputfields.map((input, index) => (
              <>
                <Label htmlFor="email">{input.label}</Label>
                <Input
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={
                    input.name === 'name'
                      ? name
                      : input.name === 'email'
                      ? email
                      : input.name === 'subject'
                      ? subject
                      : message
                  }
                  required
                  onFocus={() => {
                    handleInputFocus(input.name);
                    setLastUpdatedField(input.name);
                  }}
                  onMouseEnter={() => {
                    handleInputFocus(input.name);
                    setLastUpdatedField(input.name);
                  }}
                  onChange={handleInputChange}
                />
              </>
            ))}
            <Label htmlFor="email">{contactData.textarea.label}</Label>
            <Textarea
              placeholder={contactData.textarea.placeholder}
              rows={contactData.textarea.rows}
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
            />
            <Button variant="outline" value="submit" type="submit">
              Submit 🚀
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
