'use client';

import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [contact, setContact] = useState<string>(''); // Email ya Phone number ke liye
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [authType, setAuthType] = useState<'phone' | 'email'>('phone');
  const router = useRouter();

  // 1. OTP Bhejne ka Function
  const handleSendOTP = async (e: FormEvent) => {
    e.preventDefault();
    
    const options = authType === 'phone' 
      ? { phone: contact } 
      : { email: contact };

    const { error } = await supabase.auth.signInWithOtp(options);

    if (error) {
      alert("OTP bhejne me error: " + error.message);
    } else {
      alert("OTP bhej diya gaya hai!");
      setIsOtpSent(true);
    }
  };

  // 2. OTP Verify karne ka Function
  const handleVerifyOTP = async (e: FormEvent) => {
    e.preventDefault();

    const verifyOptions = {
      token: otp,
      type: authType === 'phone' ? 'sms' as const : 'email' as const,
      ...(authType === 'phone' ? { phone: contact } : { email: contact })
    };

    const { error } = await supabase.auth.verifyOtp(verifyOptions);

    if (error) {
      alert("Galat OTP! Fir se try korein.");
    } else {
      alert("Login Safal Raha!");
      router.push('/dashboard');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Odlix Unified Login</h2>
      
      {!isOtpSent ? (
        <form onSubmit={handleSendOTP}>
          <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button 
              type="button" 
              onClick={() => { setAuthType('phone'); setContact(''); }} 
              style={{ padding: '5px 10px', fontWeight: authType === 'phone' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Phone OTP
            </button>
            <button 
              type="button" 
              onClick={() => { setAuthType('email'); setContact(''); }} 
              style={{ padding: '5px 10px', fontWeight: authType === 'email' ? 'bold' : 'normal', cursor: 'pointer' }}
            >
              Email OTP
            </button>
          </div>

          <input 
            type={authType === 'email' ? 'email' : 'text'} 
            placeholder={authType === 'phone' ? '+919876543210 (With Country Code)' : 'Enter your email'} 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP}>
          <p style={{ fontSize: '14px', color: '#555' }}>OTP aapke {authType} par bheja gaya hai.</p>
          <input 
            type="text" 
            placeholder="Enter 6-digit OTP" 
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Verify & Login
          </button>
          <button 
            type="button" 
            onClick={() => setIsOtpSent(false)} 
            style={{ marginTop: '10px', background: 'none', border: 'none', color: '#0070f3', cursor: 'pointer', width: '100%', textAlign: 'center' }}
          >
            Back / Change Details
          </button>
        </form>
      )}
    </div>
  );
}