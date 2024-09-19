import React from 'react';
import './Media.css';
import video1slika from '../slike/video1slika.png';
import eneplusvideo from '../slike/eneplusvideo.mp4';
import eneplusvideo2 from '../slike/eneplusvideo2.mp4';
import eneplusvideo3 from '../slike/eneplusvideo3.mp4';
import termovizijskosnimanje from '../slike/termovizijskosnimanje.pdf'
import model from '../slike/model.pdf'
import blowerdoor from '../slike/blowerdoor.pdf'
import iso5 from '../slike/iso5.pdf'




const Media = () => {
  // Array za video linkove (YouTube), sa slikama, naslovima i opisima
  const videos = [
    { 
      title: "Prezentacija Softvera", 
      url: "https://www.youtube.com/watch?v=HHUTF3Wh8zU", 
      thumbnail: video1slika, 
      description: "Prezentacija softvera za energetski management."
    }
  ];

  // Array za dokumentaciju (PDF fajlovi)
  const documents = [
    { title: "Energetski menadžment", link: model },
    { title: "BlowerDoor Test", link: blowerdoor },
    { title: "Termovizijsko snimanje", link: termovizijskosnimanje },
    { title: "ISO 50001", link: iso5 }
  ];

  return (
    <>
    <div className="media-container">
      <div className="media-section">
        <h2>Video</h2>
        <div className="media-list">
          {videos.map((video, index) => (
            <div key={index} className="media-item">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} className="media-thumbnail" />
                <div className="media-text">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <span className="learn-more">Poseti</span>
                </div>
              </a>
            </div>
          ))}
        </div>

        <h2 className='konsalting'>Konsalting</h2>
        <div className='video-containermedia'>
            <video src={eneplusvideo} autoPlay muted loop className='videokons'/>
        </div>

        <h2 className='konsalting'>Elaborati energetske efikasnosti</h2>
        <div className='video-containermedia2'>
            <video src={eneplusvideo2} autoPlay muted loop className='videokons'/>
        </div>

        <h2 className='konsalting'>Javno privatno partnerstvo</h2>
        <div className='video-containermedia'>
            <video src={eneplusvideo3} autoPlay muted loop className='videokons'/>
        </div>
      </div>

      {/* Sekcija za Dokumentaciju */}
      <div className="media-section">
        <h2>Dokumentacija</h2>
        <div className="document-list">
          {documents.map((document, index) => (
            <div key={index} className="document-item">
              <a href={document.link} target="_blank" rel="noopener noreferrer" className="document-link">
                {document.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <footer className="footer">
        <p>&copy;ENEPLUS. Sva prava zadržana.</p>
      </footer>
    </>
  );
};

export default Media;
