import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center text-light text-center"
      style={{
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.06), #0A0A0A 60%)'
      }}
    >
      <div
        className="container d-flex flex-column align-items-center justify-content-center"
        style={{ maxWidth: '720px', paddingTop: '1px' }}
      >
        <img
          src="/logo.png"
          alt="Eman.dev logo"
          style={{
            width: '300px',
            marginBottom: '50px', // reduced spacing
            filter: 'drop-shadow(0 0 12px rgba(0,255,150,0.4))'
          }}
        />
        <h1 className="fw-bold mb-2" style={{ fontSize: '2.6rem', color: '#DADADA' }}>
          WEB DEVELOPMENT THAT WORKS
        </h1>
        <p className="lead mb-3" style={{ color: '#CCCCCC', fontSize: '1.1rem' }}>
          I build fast, responsive websites that deliver results.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg">
          View My Work
        </a>
      </div>
    </section>
  );
}
