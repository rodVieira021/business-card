import React from 'react';
import twitter from '../comp/imgs/Twitter.png';
import facebook from '../comp/imgs/Facebook.png';
import instagram from '../comp/imgs/Instagram.png';
import github from '../comp/imgs/GitHub.png';

function Footer() {
  return (
    <div className="container-footer">
      <img src={twitter} alt="tt" width="25px" />
      <img src={facebook} alt="tt" width="25px" />
      <img src={instagram} alt="tt" width="25px" />
      <img src={github} alt="tt" width="25px" />
    </div>
  );
}

export default Footer;
