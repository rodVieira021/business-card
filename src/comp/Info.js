import React from 'react';
import photo from '../comp/imgs/perfil.png';

function Info() {
  return (
    <div className="info">
      <div className="container-info">
        <div className="perfil-container">
          <img src={photo} alt="perfil" className="perfil" />
        </div>
        <div className="text">
          <h2>Laura Smith</h2>
          <h3>Frontend Developer</h3>
          <h4>laurasmith.web</h4>
          <button className="btn btn--1">Email</button>
          <button className="btn btn--2">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
