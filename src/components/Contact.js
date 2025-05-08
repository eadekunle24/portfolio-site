import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="lead">Let’s build something together!</p>

        <p>
          <a
            href="mailto:eadekunle56@gmail.com"
            className="btn btn-primary mb-3"
          >
            eadekunle56@gmail.com
          </a>
        </p>

        <p>
          <a
            href="https://github.com/eadekunle24"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
