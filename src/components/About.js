import React from 'react';

export default function About() {
  return (
    <section
  id="about"
  className="text-center"
  style={{
    paddingTop: window.innerWidth < 768 ? '30px' : '80px',
    paddingBottom: '80px'
  }}
>

<div
  className="container d-flex justify-content-center"
  style={{ marginTop: '-250px' }}
>
        <div
          className="p-5"
          style={{
            maxWidth: '720px',
            backgroundColor: '#111',
            borderRadius: '12px',
            boxShadow: '0 0 25px rgba(0,255,150,0.05)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <h2 className="mb-4">About Me</h2>
          <p className="lead mb-0">
            I'm a web developer who specializes in building clean, fast, and modern websites using React and Bootstrap.
          </p>
        </div>
      </div>
    </section>
  );
}
