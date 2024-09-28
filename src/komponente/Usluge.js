import React from 'react';
import './Usluge.css';
import { useNavigate } from 'react-router-dom';

const Usluge = () => {

  const navigate = useNavigate();

  const handleTreninzi = () => {
    navigate('/treninzi-i-edukacije');
  };

  const handleProjekti = () => {
    navigate('/projekt-menadzment')
  }
  
  return (
    <>
      <div className="usluge-container">
        <h2 className="usluge-title">NAŠE USLUGE</h2>
        <div className="usluge-grid">
          <div className="usluga-card">
            <i className="usluga-icon ri-line-chart-line"></i>
            <h3 className="usluga-title">Energetski Menadžment</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-award-line"></i>
            <h3 className="usluga-title">Energetska Sertifikacija</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-computer-line"></i>
            <h3 className="usluga-title">Web Aplikacije i Prezentacije</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-search-eye-line"></i>
            <h3 className="usluga-title">Energetski Pregledi</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-file-list-line"></i>
            <h3 className="usluga-title">Studije i Analize</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-compasses-line"></i>
            <h3 className="usluga-title">Projektovanje</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-hand-heart-line"></i>
            <h3 className="usluga-title">Priprema i Podrška za JPP</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-speed-line"></i>
            <h3 className="usluga-title">Merenja</h3>
          </div>
          <div className="usluga-card" onClick={handleTreninzi}>
            <i className="usluga-icon ri-graduation-cap-line"></i>
            <h3 className="usluga-title">Treninzi i Edukacije</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-bar-chart-grouped-line"></i>
            <h3 className="usluga-title">ISO 50001</h3>
          </div>
          <div className="usluga-card">
            <i className="usluga-icon ri-question-line"></i>
            <h3 className="usluga-title">Energetski Konsalting</h3>
          </div>
          <div className="usluga-card" onClick={handleProjekti}>
            <i className="usluga-icon ri-settings-3-line"></i>
            <h3 className="usluga-title">Projekt Menadžment</h3>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy;ENEPLUS. Sva prava zadržana.</p>
      </footer>
    </>
  );
};

export default Usluge;
