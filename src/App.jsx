import React, { useEffect } from 'react';
import AppRoutes from '@/routes/Routes';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function App() {
  // Initialize theme based on saved preference
  useEffect(() => {
    // Check for stored theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (
      savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightbg-100 via-lightbg-200 to-lightbg-100 dark:from-darkbg-900 dark:via-darkbg-800 dark:to-darkbg-900">
      <AppRoutes />
    </div>
  );
}
