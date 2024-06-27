import * as React from 'react';
import { 
  Html, 
  Button,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Heading
} from "@react-email/components";

import { Tailwind } from '@react-email/components';

// Define the type for the props that the Email component will receive
type EmailProps = {
  email: string;
  name: string;
  company: string;
  phone: string;
  message: string;
  role: string;
};

// The Email component receives the email, name, company, phone, and message as props
export function Email({
  email, 
  name,
  company,
  phone,
  message,
  role
}: EmailProps) {
  return (
    // The Html component represents the root of the HTML document and sets the language to English
    <Html lang="en">
      {/* Head component to contain metadata and styles */}
      <Head>
        {/* Tailwind component to apply Tailwind CSS styles */}
      </Head>
      <Preview className='bg-red-400/10'>
          Got a New message from {name} about {role} at {company}
      </Preview>
        <Tailwind >
          <Body className='text-white bg-black'>        
            {/* Container component to wrap the content and apply styling */}
            <Container>
              {/* Section component to group related content together */}
              <Section>
                {/* Introduction section with sender's name and company */}
                <Heading 
                  className='text-2xl font-bold text-gray-800'
                >
                  New message from {name} about {role} at {company}
                </Heading>
                <Text className='text-white/50 font-primary'>
                  Sender&aposs Info - 
                  <Row>
                    <Column>Name: {name}</Column>
                  </Row>
                  <Row>
                    <Column>Email: {email}</Column>
                  </Row>
                  <Row>
                    <Column>Phone: {phone}</Column>
                  </Row>
                  <Row>
                    <Column>Company: {company}</Column>
                  </Row>
                </Text>
                <Text className='text-red-700'>
                  <strong>Message:</strong> {message}
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
    </Html>
  );
}

export default Email;
