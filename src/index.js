import React from 'react';
import ReactDOM from 'react-dom';
import About from './comp/About.js';
import Footer from './comp/Footer.js';
import Info from './comp/Info.js';
import './style.css';

function Index() {
  return (
    <div>
      <Info />
      <About />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
