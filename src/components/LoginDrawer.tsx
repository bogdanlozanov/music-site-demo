'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? '0' : '-100%')};
  height: 100%;
  width: 100%;
  max-width: 400px;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1000;
  padding: 32px;
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background: #2359C3;
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  font-weight: bold;
  border-radius: 6px;
  margin-top: 8px;
`;

export default function LoginDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      onClose();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <Overlay $open={open} onClick={onClose} />
      <Drawer $open={open}>
        <CloseButton onClick={onClose} aria-label="Close login drawer">
          <FiX />
        </CloseButton>

        <h2>Customer Centre login</h2>
        <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button onClick={handleLogin}>Log In</Button>
        <p style={{ marginTop: '16px', color: "#2359C3" }}>Register now →</p>
      </Drawer>
    </>
  );
}
