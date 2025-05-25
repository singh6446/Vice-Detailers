
import React from 'react';
import ReactDOM from 'react-dom/client';

function Card({ title, price, tag }) {
  return (
    <div style={{
      backdropFilter: 'blur(15px)',
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: '20px',
      color: '#fff',
      boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
      minWidth: 260
    }}>
      <h2 style={{ margin: '0 0 10px' }}>{title}</h2>
      <p style={{ margin: 0 }}>Price: ${price}</p>
      <span style={{
        fontSize: 12,
        background: 'rgba(255,255,255,0.1)',
        padding: '4px 10px',
        borderRadius: '20px',
        display: 'inline-block',
        marginTop: 10
      }}>{tag}</span>
    </div>
  );
}

function App() {
  const services = [
    { title: 'Full Interior Detail', price: 199, tag: 'Premium' },
    { title: 'Ceramic Coating', price: 499, tag: 'Protection' },
    { title: 'Jump Start Service', price: 49, tag: 'Emergency' }
  ];

  return (
    <div style={{
      padding: '40px 20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px'
    }}>
      <h1 style={{ color: 'white', fontSize: '2rem' }}>VICE DETAILERS</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1000px'
      }}>
        {services.map((s, i) => (
          <Card key={i} title={s.title} price={s.price} tag={s.tag} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
