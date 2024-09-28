import React from 'react';
import './Projekt.css'; // Import CSS fajla
import projektmen from '../slike/projektmen.webp'

const Projekt = () => {
  return (
    <>
    <div className="projekt-menadzment-container">
      {/* Naslov sa animacijom */}
      <div className="projekt-header">
        <h1>PROJEKT MENADŽMENT</h1>
        <p className="projekt-subtitle">ENEPLUS udovoljava svim potrebama pojedinačnog projekta.</p>
      </div>

      {/* Slika s borderom i transparentnim tekstom */}
      <div className="projekt-image-section">
        <img src={projektmen} alt="Projekt Menadžment" className="projekt-main-image" />
        <div className="projekt-image-overlay">
          <p className="overlay-subtitle">Kontaktirajte nas.</p>
        </div>
      </div>

      {/* Uvodni paragraf */}
      <div className="projekt-description">
        <p>
          <strong>ENEPLUS</strong> vam pruža uslugu po sistemu „ključ u ruke“ počevši od pregleda lokacije za realizaciju vašeg projekta i planiranja. Naš stručni tim vrši ocenu tehničkih karakteristika, uslova i zahteva za realizaciju vašeg projekta.
        </p>
      </div>

      {/* Nabrajanje usluga sa animacijom */}
      <div className="projekt-services">
        <h2 className="services-title">Naše Usluge Uključuju:</h2>
        <ul className="services-list">
          <li className="service-item">Planiranje</li>
          <li className="service-item">Nabavku i praćenje resursa</li>
          <li className="service-item">Analiza budžeta</li>
          <li className="service-item">Određivanje rokova</li>
          <li className="service-item">Izvođenje i praćenje projekta</li>
          <li className="service-item">Zatvaranje projekta</li>
        </ul>
      </div>

      {/* Završni paragraf */}
      <div className="projekt-summary">
        <p>
          <strong>ENEPLUS</strong> određuje projektne faze, koordiniramo rad celog tima i nadziremo napredak. ENEPLUS tim za upravljanje projektima osigurava da se vaš projekat isporuči na vreme i prema predviđenim ograničenjima. Naš projektni tim sa svojim bogatim iskustvom može postići najviše standarde.
        </p>
      </div>
    </div>
    <footer className="footer">
    <p>&copy;ENEPLUS. Sva prava zadržana.</p>
  </footer>
  </>
  );
};

export default Projekt;
