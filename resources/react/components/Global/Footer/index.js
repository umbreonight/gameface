import React from "react";
import Navigation from "../../Elements/Navigation";

const Footer = () => {
  return (
    <footer>
      <Navigation />
      <div className="social-media">
        <a href="#" className="social-link facebook">
          <img src="/static/icons/Socials/facebook.svg"></img>
        </a>
        <a href="#" className="social-link twitter">
          <img src="/static/icons/Socials/twitter.svg"></img>
        </a>
        <a href="#" className="social-link youtube">
          <img src="/static/icons/Socials/youtube.svg"></img>
        </a>
        <a href="#" className="social-link instagram">
          <img src="/static/icons/Socials/instagram.svg"></img>
        </a>
      </div>
      <div className="brand">
        <img src="/static/images/gf-logo-white.png"></img>
      </div>
      <div className="copyright">© Copyright 2020, GameFace365</div>
    </footer>
  );
};

export default Footer;
