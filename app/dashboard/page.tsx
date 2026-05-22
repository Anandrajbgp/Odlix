'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; // 🌟 Naya Client Browser instance use kar rahe hain
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  
  // 🌟 Naye tarike se client ko initialize kiya
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    // 🌟 Supabase se session clear hoga aur cookies bhi automatic delete ho jayengi
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <p style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif', color: '#fff' }}>
        Loading Odlix System...
      </p>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', fontFamily: 'sans-serif', color: '#fff', background: '#111', borderRadius: '12px', border: '1px solid #333' }}>
      <h1 style={{ color: '#0070f3' }}>Welcome to Odlix Protected Dashboard</h1>
      <p style={{ color: '#aaa' }}>Aap securely login ho chuke hain!</p>
      
      <div style={{ background: '#222', padding: '15px', borderRadius: '8px', marginTop: '20px', wordBreak: 'break-all', border: '1px solid #444' }}>
        <strong style={{ color: '#22c55e' }}>User ID:</strong> {user?.id} <br />
        <strong style={{ color: '#22c55e' }}>Logged in via:</strong> {user?.email || user?.phone}
      </div>
      
      <button 
        onClick={handleLogout} 
        style={{ marginTop: '20px', padding: '10px 20px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Logout Account
      </button>
    </div>
  );
}