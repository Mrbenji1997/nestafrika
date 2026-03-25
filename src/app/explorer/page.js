"use client";

export default function Explorer() {
  return (
    <main className="min-h-screen pt-20 px-16"
      style={{background: '#0e0d0b'}}>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#f0e8d5',
        marginBottom: '8px'
      }}>
        Explorer les biens
      </h1>
      <p style={{color: '#7a7060', fontSize: '14px'}}>
        348 biens disponibles au Cameroun
      </p>
    </main>
  );
}