import React from 'react';
import './Footer.css';

function Footer() {
return(
<div className="footer-wrapper">
    <div className="footer-inside">
      <div className="footer-info">
         <div className="footer-logo" >
           <a href="https://www.linkedin.com/in/subham-mitra/" target="_blank"><img src="/images/linkedin.svg"></img></a>
           <a className="middle-footer-logo"href="https://github.com/subham2107" target="_blank"><img src="/images/github.svg"></img></a>
           <a href="https://twitter.com/subham2107" target="_blank"><img src="/images/twitter.svg"></img></a>
          </div>
      </div>
    </div>
  </div>
);
}
export default Footer;