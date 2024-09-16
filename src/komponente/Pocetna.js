import React from 'react';
import './Pocetna.css'; 

const Pocetna = () => {
  return (
    <div className="pocetna-strana">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">EnePlus</h1>
          <p className="hero-description">
            Vam pomaže da budete efikasniji.
          </p>
          <button className="hero-btn">Saznaj više</button>
        </div>
      </section>

      {/* Services section */}
      <section className="usluge container">
        <h2 className="section-title">Naše Usluge</h2>
        <div className="usluge-lista">
          <div className="usluga">
            <h3 className="usluga-title">Solarni Paneli</h3>
            <p className="usluga-description">Instalacija i održavanje solarnih sistema.</p>
          </div>
          <div className="usluga">
            <h3 className="usluga-title">Izolacija</h3>
            <p className="usluga-description">Poboljšanje energetske efikasnosti kroz kvalitetnu izolaciju.</p>
          </div>
          <div className="usluga">
            <h3 className="usluga-title">Energetski Konsalting</h3>
            <p className="usluga-description">Profesionalne usluge za optimizaciju vaše potrošnje energije.</p>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="proizvodi container">
        <h2 className="section-title">Naši Proizvodi</h2>
        <div className="proizvodi-lista">
          <div className="proizvod">
            <img src="link-do-slike-proizvoda" alt="Solarni Panel" className="proizvod-img" />
            <h3 className="proizvod-title">Solarni Panel</h3>
            <p className="proizvod-description">Visokokvalitetni solarni paneli za kućnu upotrebu.</p>
          </div>
          <div className="proizvod">
            <img src="link-do-slike-proizvoda" alt="Izolacioni materijal" className="proizvod-img" />
            <h3 className="proizvod-title">Izolacioni materijal</h3>
            <p className="proizvod-description">Poboljšajte izolaciju svog doma sa našim proizvodima.</p>
          </div>
          <div className="proizvod">
            <img src="link-do-slike-proizvoda" alt="Toplotne pumpe" className="proizvod-img" />
            <h3 className="proizvod-title">Toplotne pumpe</h3>
            <p className="proizvod-description">Efikasna rešenja za grejanje i hlađenje.</p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="kontakt container">
        <h2 className="section-title">Kontaktirajte nas</h2>
        <p>Za više informacija o našim uslugama i proizvodima, kontaktirajte nas putem telefona ili emaila.</p>
        <div className="kontakt-info">
          <p>Telefon: +381 11 123 4567</p>
          <p>Email: info@eneplus.rs</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 EnePlus. Sva prava zadržana.</p>
      </footer>
    </div>
  );
};

export default Pocetna;
