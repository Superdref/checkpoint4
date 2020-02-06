import React from "react";
import { Menu, Sidebar, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo WC.png";
import styles from "./Menu.module.scss";

const { logowildcircus, Menu, section, centerlogo } = styles;

export default function Menu() {
  return (
    <header>
      <Sidebar as={Menu} style={{ width: "160px" }}>
        <Image src={Logo} className={logowildcircus} alt="Logo Wild Circus" />
        <Menu.Item>
          <Link to="./" className={section}>
            About Us
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="./Events" className={section}>
            Events
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="./Gallery" className={section}>
            Gallery
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="./Booking" className={section}>
            Booking
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="./" className={section}>
            Contact Us
          </Link>
        </Menu.Item>
      </Sidebar>
      <h2>Art is everywhere...</h2>
    </header>
  );
}
