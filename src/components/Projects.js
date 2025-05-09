import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="text-center">
      <div className="container">
        <h2 data-aos="fade-up">Projects</h2>
        <div className="row g-4">
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
                <h5 className="card-title text-light">Business Website</h5>
                <p className="card-text text-secondary">
                  A professional site for a fictional local tech shop.
                </p>
                <a
                  href="#"
                  className="btn btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card h-100 p-4"
              data-aos="zoom-in"
              data-aos-delay="300"
              style={{
                backgroundColor: '#111',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 0 20px rgba(0,255,150,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-light">Web App Project</h5>
                <p className="card-text text-secondary">
                  A budget tracking app with React features and local storage.
                </p>
                <a
                  href="#"
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
