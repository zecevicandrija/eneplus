import React from 'react';
import './Treninzi.css';
import kartica1 from '../slike/kartica1.webp';
import kartica2 from '../slike/kartica2.webp';
import kartica3 from '../slike/kartica3.webp';
import kartica4 from '../slike/kartica4.webp';

const Treninzi = () => {
  return (
    <>
      <main className="trening-container">
        <section className="trening-section">
          <hgroup className="trening-header">
            <h2 className="trening-title">TRENINZI I EDUKACIJE</h2>
            <h3 className="trening-subtitle">Obuke u oblasti energetske efikasnosti</h3>
          </hgroup>
          <p className="trening-description">Obuke sprovodimo u našem ili vašem prostoru. Treninzi i edukacije koje nudimo:</p>
          <div className="trening-grid card-container">
            <div className="trening-card card">
              <img src={kartica1} alt="Energetski menadžer" className="trening-image" />
              <h3 className="trening-card-title">Edukacije energetskih menadžera</h3>
              <p className="trening-card-description">Učite od profesionalaca kako upravljati energetskim resursima u vašoj firmi ili ustanovi.</p>
            </div>
            <div className="trening-card card">
              <img src={kartica2} alt="Softverski alati" className="trening-image" />
              <h3 className="trening-card-title">Softverski alati za energetsku efikasnost i menadžment</h3>
              <p className="trening-card-description">Saznajte kako koristiti moderne softverske alate za poboljšanje energetske efikasnosti.</p>
            </div>
            <div className="trening-card card">
              <img src={kartica3} alt="Energy Performance Contracting" className="trening-image" />
              <h3 className="trening-card-title">Energy Performance Contracting</h3>
              <p className="trening-card-description">Optimizujte vašu potrošnju energije kroz ugovore za energetsku efikasnost.</p>
            </div>
            <div className="trening-card card">
              <img src={kartica4} alt="Energy Supply Contracting" className="trening-image" />
              <h3 className="trening-card-title">Energy Supply Contracting</h3>
              <p className="trening-card-description">Osigurajte stabilno snabdevanje energijom uz najbolje ugovorne uslove.</p>
            </div>
          </div>
          <figure className="trening-main-image">
            <img 
              src="https://files.oaiusercontent.com/file-sghX2lF8DY2PyXNopQ1uiUPh?se=2024-09-19T11%3A27%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6f631cbe-15e7-461f-a538-ca10dc9141be.webp&sig=2ugnTBmvq5xLIkHBbVsJldn5VTsJEHq3xifdGGOhzRc%3D"
              alt="Modern energy-efficient office" 
              className="trening-office-image"
            />
            <figcaption className="trening-figcaption"><a href="https://unsplash.com" target="_blank">Prikaz moderne energetski efikasne kancelarije</a></figcaption>
          </figure>
        </section>
      </main>

      <section className="subscribe-container" aria-label="Subscribe example">
        <div className="subscribe-content">
          <article className="subscribe-article">
            <hgroup className="subscribe-header">
              <h2 className="subscribe-title">Pretplatite se na naš newsletter</h2>
              <h3 className="subscribe-subtitle">Ostanite u toku sa najnovijim trendovima u energetskoj efikasnosti</h3>
            </hgroup>
            <form className="subscribe-form">
              <input type="text" id="firstname" name="firstname" placeholder="Ime" aria-label="Ime" className="subscribe-input" required />
              <input type="email" id="email" name="email" placeholder="Email" aria-label="Email" className="subscribe-input" required />
              <button type="submit" onClick={(e) => e.preventDefault()} className="subscribe-button">Pretplati se</button>
            </form>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>&copy;ENEPLUS. Sva prava zadržana.</p>
      </footer>
    </>
  );
};

export default Treninzi;
