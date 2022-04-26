import React from 'react';
import Photo from './imgs/perfil.png';
import SvgEmail from './imgs/maillogo.svg';

function Info() {
  return (
    <div className="info">
      <div className="container-info">
        <div className="perfil-container">
          <img src={Photo} alt="perfil" className="perfil" />
        </div>
        <div className="text">
          <h2>Laura Smith</h2>
          <h3>Frontend Developer</h3>
          <h4>laurasmith.web</h4>
          <button className="btn btn--1">
            <img
              className="btn-email"
              src={SvgEmail}
              width="25px"
              alt="svgEmail"
            />
            Email
          </button>
          <button className="btn btn--2">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
