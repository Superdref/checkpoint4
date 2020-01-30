import React from "react";
//import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "../../assets/logo wc.png";
import styles from "./Homepage.module.css";

const { logowildcircus } = styles;

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
        <footer></footer>
      </div>
    </>
  );
}

export default Homepage;
