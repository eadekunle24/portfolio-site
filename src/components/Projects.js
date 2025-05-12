import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="text-center">
      <div className="container">
        <h2 data-aos="fade-up">Projects</h2>
        <div className="row g-4">

          {/* --- Project 1: ByteFix Tech Shop Website --- */}
          <div className="col-md-6">
            <div
              className="card h-100 p-4"
              data-aos="zoom-in"
              data-aos-delay="100"
              style={{
                backgroundColor: '#111',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 0 20px rgba(0,255,150,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-light">ByteFix Tech Shop</h5>
                <p className="card-text text-secondary">
                  A clean and modern business website created for a fictional local tech repair shop. 
                  It showcases services, pricing, a contact form with Google Maps integration, FAQs, 
                  and smooth scroll animations — all built using React and styled with Bootstrap.
                </p>
                <a
                  href="https://project1techshop-mwv7.vercel.app"
                  className="btn btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>

          {/* --- Project 2: ByteTrack Web App --- */}
          <div className="col-md-6">
            <div
              className="card h-100 p-4"
              data-aos="zoom-in"
              data-aos-delay="200"
              style={{
                backgroundColor: '#111',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 0 20px rgba(0,255,150,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-light">ByteTrack Web App</h5>
                <p className="card-text text-secondary">
                  A responsive personal finance tracker built with React. 
                  Features include dynamic pie and line charts, animated chart transitions, 
                  date-grouped transactions, modal-based transaction input, and swipe-friendly mobile UX.
                </p>
                <a
                  href="https://bytetrack-app.vercel.app/"
                  className="btn btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
