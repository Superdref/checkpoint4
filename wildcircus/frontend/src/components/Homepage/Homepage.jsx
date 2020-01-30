import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../../assets/logo wc.png";
import NewBuffon from "../../assets/modern-buffon.jpg";
import Buffon from "../../assets/saltimbanque.jpg";
import Juggler from "../../assets/street-juggler.jpg";
import Statue from "../../assets/street-statue.jpg";
import styles from "./Homepage.module.css";

const { logowildcircus, buffon, oldbuffon, juggler, statue } = styles;

function Homepage() {
  return (
    <>
      <div>
        <navbar>
          <ul>
            <li>About Us</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Booking</li>
            <li>Contact Us</li>
          </ul>
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
          original circus world... more we believe in respect for wildlife, so
          the animals that play with us are fake!!! Also we love music and
          that's why we often have guests as singer or Djs.
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
