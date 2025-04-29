import React from 'react';
import AppRoutes from '@/routes/Routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <AppRoutes />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
