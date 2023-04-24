import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1">The City's Dining Room</h1>
      <p className="p__opensans" style={{ margin: "2rem 0"}}>Influenced by Florida's rich bounty and curated by Tamarac's grand downtown manor house, Eli & Zer serves sophisticated cuisine, prestigious wine, and inspiring moments at the heart of a city landmark.</p>
      <a href="#menu">
        <button type="button" className="custom__button">Explore Menu</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;