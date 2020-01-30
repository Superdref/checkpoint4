import React from "react";
import { Link } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
import Logo from "../../assets/logo wc.png";
import NewBuffon from "../../assets/modern-buffon.jpg";
import Buffon from "../../assets/saltimbanque.jpg";
import Juggler from "../../assets/street-juggler.jpg";
import Statue from "../../assets/street-statue.jpg";
import styles from "./Homepage.module.css";

const {
  logowildcircus,
  menu,
  section,
  buffon,
  oldbuffon,
  juggler,
  statue
} = styles;

function Homepage() {
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
        <article>The new buffons are in the street...</article>
        <Image src={NewBuffon} className={buffon} alt="One-man band" />
        <Image src={Buffon} className={oldbuffon} alt="The original Buffon" />
        <Image src={Juggler} className={juggler} alt="Street Juggler" />
        <Image src={Statue} className={statue} alt="Street Statue" />

        <article>
          Our circus is realy a new vision of the street arts mixed with the
          original circus world...
        </article>
        <Link to="./Events">
          <h2>Let's see our shows...</h2>
        </Link>
        <footer></footer>
      </div>
    </>
  );
}

export default Homepage;
