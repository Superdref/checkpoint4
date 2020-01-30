import React from "react";
import { Link } from "react-router-dom";
import styles from "./Gallerypage.module.css";

import { Image, Menu } from "semantic-ui-react";
import Logo from "../../assets/logo wc.png";
import Britney from "../../assets/britney-guest.jpg";
import NinjaTune from "../../assets/ninja-tune.jpg";

const { logowildcircus, menu, section, guestartist, guestdj } = styles;

function Gallerypage() {
  return (
    <>
      <div>
        <navbar>
          <Menu.Item className={menu}>
            <Link to="./" className={section}>
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item className={menu}>
            <Link to="./Events" className={section}>
              Events
            </Link>
          </Menu.Item>
          <Menu.Item className={menu}>
            <Link to="./Gallery" className={section}>
              Gallery
            </Link>
          </Menu.Item>
          <Menu.Item className={menu}>
            <Link to="./Booking" className={section}>
              Booking
            </Link>
          </Menu.Item>
          <Menu.Item className={menu}>
            <Link to="./" className={section}>
              Contact Us
            </Link>
          </Menu.Item>
        </navbar>
        <Image src={Logo} className={logowildcircus} alt="Logo Wild Circus" />
        <h2>Art is everywhere...</h2>
        <h3>Singer guest</h3>
        <Image src={Britney} className={guestartist} alt="Britney Spears" />
        <h3>Dj guest</h3>
        <Image src={NinjaTune} className={guestdj} alt="Ninja Tunes" />
        <article>We often have guests in our show...</article>
        <footer></footer>
      </div>
    </>
  );
}

export default Gallerypage;
