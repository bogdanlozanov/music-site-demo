// components/NewsletterSignup.tsx
'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #f9fafc;
  padding: 48px 16px;
  border-top: 1px solid #e0e0e0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li::before {
    content: '✓';
    margin-right: 8px;
    color: #3a86ff;
  }

  li {
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #3a86ff;
  }
`;

const Button = styled.button`
  background-color: #111827;
  color: #fff;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: #000;
  }
`;

const Consent = styled.p`
  font-size: 0.75rem;
  color: #666;

  a {
    color: #3a86ff;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default function NewsletterSignup() {
  return (
    <Section>
      <Container>
        <Info>
          <Title>🎵 Music World Newsletter</Title>
          <Description>
            Subscribe and win one of 50 vouchers worth €50 each!
          </Description>
          <List>
            <li>Exclusive deals & offers</li>
            <li>Music World artist insights</li>
            <li>Inspiration, gear & giveaways</li>
          </List>
        </Info>

        <Form onSubmit={(e) => e.preventDefault()}>
          <InputRow>
            <Input type="email" placeholder="Email address*" required />
            <Button type="submit">Sign up now</Button>
          </InputRow>
          <Consent>
            By clicking on <strong>"Sign up now"</strong>, you agree to receiving e-mail advertising. You can unsubscribe at any time.
            Read more in our{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              data protection guideline
            </a>
            .
          </Consent>
        </Form>
      </Container>
    </Section>
  );
}
