
import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroSection from './HeroSection';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'url(/bg.jpg) no-repeat center center fixed',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <HeroSection />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
