import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    window.onload = () => {
      ScrollReveal().reveal('.App-header', {
        delay: 1500,
        distance: '30px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000,
        easing: 'ease-in-out',
        reset: true
      });
    };
  }, []);

  return (
    <div className="container mt-5">
      <header className="App-header">
        <h1>Tatsuki Tsujimoto</h1>
        <p>Software Development / Bioinformatics / Machine Learning</p>
      </header>

      <section className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Project 1"
            />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of project 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Project 2"
            />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of project 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Project 3"
            />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of project 3.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
