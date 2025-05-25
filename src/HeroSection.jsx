
import React from 'react';

function HeroSection() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      color: 'white',
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(12px)',
      borderRadius: '20px',
      maxWidth: '90%',
      margin: 'auto',
      animation: 'fadeIn 2s ease-in-out'
    }}>
      <h1 style={{
        fontSize: '2.8rem',
        marginBottom: '20px',
        color: '#FFA500',
        textShadow: '0 0 10px rgba(255,165,0,0.5)'
      }}>
        Crafted in Silence. Revealed in Every Reflection.
      </h1>
      <button style={{
        marginTop: '10px',
        padding: '12px 30px',
        background: '#FFA500',
        border: 'none',
        borderRadius: '30px',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: 'black',
        boxShadow: '0 0 10px rgba(255,165,0,0.4)'
      }}>
        Book Now
      </button>
    </div>
  );
}

export default HeroSection;
