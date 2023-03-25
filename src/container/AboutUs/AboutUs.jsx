import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.EZ} alt="EZ letters" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Evoking the legacy of our hotel's storied past and vibrant new era, Eli & Zer is our distinguished dining room in the heart of this noble manor house. Plating the rich harvest of Florida's bountiful produce, our culinary team crafts seasonal menus through local partners and sustainable farmers.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Evoking the legacy of our hotel's storied past and vibrant new era, Eli & Zer is our distinguished dining room in the heart of this noble manor house. Plating the rich harvest of Florida's bountiful produce, our culinary team crafts seasonal menus through local partners and sustainable farmers.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;