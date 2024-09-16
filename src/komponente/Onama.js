import React from 'react';
import './Onama.css';
import zeljko from '../slike/zeljko.webp'; // Add image for Željko Zečević

const Onama = () => {
  return (
    <div className="onama">
      <section className="onama-section container">
        {/* About ENEPLUS */}
        <div className="onama-description">
          <h1 className="section-title">ENEPLUS</h1>
          <p className="about-text">
            ENEPLUS je konsultantska firma koja pruža usluge iz oblasti energetskog menadžmenta, 
            energetske efikasnosti i projektnog menadžmenta. Naš ekspertski tim stoji Vam na 
            raspolaganju prilikom analize i odabira najoptimalnijih rešenja koji će povećati energetsku 
            efikasnost Vašeg sistema uz smanjenje troškova. ENEPLUS razvija strategije i implementira 
            rešenja koja omogućuju optimizaciju procesa, smanjenja.
          </p>
        </div>

        {/* Expert Team */}
        <div className="expert-team">
          <h2 className="section-title">EKSPERTSKI TIM</h2>

          <div className="team-member">
            <img src={zeljko} alt="Željko Zečević" className="team-image" />
            <div className="member-info">
              <h3>Željko Zečević</h3>
              <p>dipl.inž.el.-master</p>
              <p>+381 64 8172033</p>
            </div>
          </div>

          <div className="team-member">
            <img src={''} alt="Nikola Vujović" className="team-image" />
            <div className="member-info">
              <h3>Nikola Vujović</h3>
              <p>dipl.inž.maš.-master</p>
              <p>+381 64 8375706</p>
            </div>
          </div>

          <p className="team-description">
            Naš ekspertski tim sačinjavaju licencirani inženjeri sa višegodišnjim iskustvom u oblasti 
            energetskog menadžmenta, realizaciji i pripremi projekata energetske efikasnosti i primene 
            obnovljivih izvora energije.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Onama;
