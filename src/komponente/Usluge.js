import React from 'react';
import './Usluge.css';

const uslugeData = [
  { icon: 'ri-line-chart-line', title: 'Energetski Menadžment'},
  { icon: 'ri-award-line', title: 'Energetska Sertifikacija'},
  { icon: 'ri-computer-line', title: 'Web Aplikacije i Prezentacije'},
  { icon: 'ri-search-eye-line', title: 'Energetski Pregledi'},
  { icon: 'ri-file-list-line', title: 'Studije i Analize'},
  { icon: 'ri-compasses-line', title: 'Projektovanje'},
  { icon: 'ri-hand-heart-line', title: 'Priprema i Podrška za JPP'},
  { icon: 'ri-speed-line', title: 'Merenja'},
  { icon: 'ri-graduation-cap-line', title: 'Treninzi i Edukacije'},
  { icon: 'ri-bar-chart-grouped-line', title: 'ISO 50001'},
  { icon: 'ri-question-line', title: 'Energetski Konsalting'},
  { icon: 'ri-settings-3-line', title: 'Projekt Menadžment'},
];

const Usluge = () => {
  return (
    <>
    <div className="usluge-container">
      <h2 className="usluge-title">NAŠE USLUGE</h2>
      <div className="usluge-grid">
        {uslugeData.map((usluga, index) => (
          <div key={index} className="usluga-card">
            <i className={`usluga-icon ${usluga.icon}`}></i>
            <h3 className="usluga-title">{usluga.title}</h3>
          </div>
        ))}
      </div>
    </div>
    <footer className="footer">
    <p>&copy;ENEPLUS. Sva prava zadržana.</p>
  </footer>
  </>
  );
};

export default Usluge;
